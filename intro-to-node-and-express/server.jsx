const express = require('express');
const app = express();
require('dotenv').config();

// Using express.json() middleware to parse JSON bodies to JS objects
app.use(express.json());

let books = [
  { id: 1, title: 'To Kill a Mockingbird', author: 'Harper Lee' },
  { id: 2, title: '1984', author: 'George Orwell' },
  { id: 3, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
];

// GET: Root
app.get('/', (req, res) => {
  res.send("<h1 style='text-align:center; margin: 40px 40px 40px 40px;'>Welcome to my Node/Express App!</h1>");
});

// GET: Read all books
app.get('/books', (req, res) => {
  res.json(books);
});

// GET: Read a specific book
app.get('/books/:id', (req, res) => {
  const bookId = parseInt(req.params.id);
  const book = books.find((book) => book.id === bookId);
  
  if (!book) return res.status(404).send('Book not found');

  res.json(book);
});

// POST: Create a new book
app.post('/books', (req, res) => {
  const newBook = {
    id: books.length + 1,
    title: req.body.title,
    author: req.body.author,
  };

  books.push(newBook);
  res.status(201).json(newBook);
});

// PUT: Update a book
app.put('/books/:id', (req, res) => {
  const bookId = parseInt(req.params.id);
  const book = books.find((book) => book.id === bookId);
  
  if (!book) return res.status(404).send('Book not found');
  
  book.title = req.body.title;
  book.author = req.body.author;

  res.json(book);
});

// DELETE: Delete a book
app.delete('/books/:id', (req, res) => {
  const bookId = parseInt(req.params.id);
  const bookIndex = books.findIndex((book) => book.id === bookId);
  
  if (bookIndex === -1) return res.status(404).send('Book not found');
  
  books.splice(bookIndex, 1);

  res.status(204).send();
});

// Error handling for invalid routes
app.use((req, res) => {
  res.status(404).send('Sorry, that route does not exist.');
});

// Start the server
const port = process.env.PORT;
app.listen(port, () => console.log(`Server listening on port ${port}`));
