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

// List all jobs
app.get("/books", (req, res) => {
  // Fetch books from the database
  pool.query('SELECT * FROM books', (error, result) => {
    if (error) {
      console.error('Error retrieving books:', error);
      res.status(500).send('Internal Server Error');
    } else {
      const books = result.rows; // Store the fetched books in a constant
      res.send(books);
    }
  });
});

// app.get("/books/:id", (req, res) => {
//   const bookId = req.params.id; // Get the book ID from the request parameters
  
//   // Fetch a specific book from the database
//   pool.query(`SELECT * FROM books WHERE id = $1`, [bookId], (error, result) => {
//     if (error) {
//       console.error('Error retrieving book:', error);
//       res.status(500).send('Internal Server Error');
//     } else {
//       const book = result; // Access the first row of the result
//       res.send(book);
//     }
//   });
// });



// // Get a specific job
// app.get("/books/:id", (req, res) => {
// const bookId = parseInt(req.params.id, 10);
// const book = jobs.find((book) => book.id === bookId);
// res.send(book);
// });