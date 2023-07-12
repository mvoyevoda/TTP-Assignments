require('dotenv').config();
const express = require("express");
const app = express();
const { Pool } = require('pg');
const nodePort = process.env.NODE_PORT;

// Configure the connection pool
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASS,
  port: process.env.DB_PORT
});


app.listen(nodePort, () => {
  console.log(`Server is running at http://localhost:${nodePort}`);
});

// // Middleware
// app.use((req, res, next) => {
//   console.log(`Request: ${req.method} ${req.originalUrl}`);
//   next();
// });

app.use(express.json()) // this allows us to send JSON formatted bodies in our requests

// Access root
app.get("/", (req, res) => {
  res.send("Welcome to the Book Inventory API");
});

// Fetch books from the database
app.get("/books", (req, res) => {

  pool.query('SELECT * FROM books', (error, result) => {
    if (error) {
      console.error('Error retrieving books:', error);
      res.status(500).send('Internal Server Error');
    } else {
      const books = result.rows;
      res.send(books);
    }
  });

});

 // Fetch a specific book from the database
 app.get("/books/:id", (req, res) => {

  const bookId = req.params.id; // Get the book ID from the request parameters
  pool.query(`SELECT * FROM books WHERE id = $1`, [bookId], (error, result) => {
    if (error) {
      console.error('Error retrieving book:', error);
      res.status(500).send('Internal Server Error');
    } else {
      if (result.rows.length === 0) {
        res.status(404).send('Book not found');
      } else {
        const book = result.rows[0]; // Access the first row of the result
        res.send(book);
      }
    }
  });

});

app.post("/books", (req, res) => {
  const { title, author, genre, quantity } = req.body;

  // Insert the new book into the database
  pool.query(
    `INSERT INTO books (title, author, genre, quantity) VALUES ($1, $2, $3, $4) RETURNING *`,
    [title, author, genre, quantity],
    (error, result) => {
      if (error) {
        console.error('Error creating book:', error);
        res.status(500).send('Internal Server Error');
      } else {
        const createdBook = result.rows[0]; // Access the first row of the result
        res.status(201).json(createdBook);
      }
    }
  );
});

app.patch("/books/:id", (req, res) => {
  const bookId = req.params.id;
  const { title, author, genre, quantity } = req.body;

  // Update the book in the database
  pool.query(
    `UPDATE books SET title = $1, author = $2, genre = $3, quantity = $4 WHERE id = $5 RETURNING *`,
    [title, author, genre, quantity, bookId],
    (error, result) => {
      if (error) {
        console.error('Error updating book:', error);
        res.status(500).send('Internal Server Error');
      } else {
        if (result.rows.length === 0) {
          res.status(404).send('Book not found');
        } else {
          const updatedBook = result.rows[0]; // Access the first row of the result
          res.json(updatedBook);
        }
      }
    }
  );
});

app.delete("/books/:id", (req, res) => {
  const bookId = req.params.id;

  // Delete the book from the database
  pool.query(
    `DELETE FROM books WHERE id = $1 RETURNING *`,
    [bookId],
    (error, result) => {
      if (error) {
        console.error('Error deleting book:', error);
        res.status(500).send('Internal Server Error');
      } else {
        if (result.rows.length === 0) {
          res.status(404).send('Book not found');
        } else {
          const deletedBook = result.rows[0]; // Access the first row of the result
          res.json(deletedBook);
        }
      }
    }
  );
});


