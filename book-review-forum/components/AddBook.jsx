import React, { useState } from 'react';
import { Book, books } from '../books.jsx';
// import '../styles/AddBook.css'
import '../styles/AddBook.css'

const AddBook = ({ addBook }) => {

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [genre, setGenre] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    addBook(new Book(title, author, genre, image));
    setTitle('');
    setAuthor('');
    setGenre('');
    setImage('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
      </label>
      <label>
        Author:
        <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} required />
      </label>
      <label>
        Genre:
        <input type="text" value={genre} onChange={(e) => setGenre(e.target.value)} required />
      </label>
      <label>
        Image Link:
        <input type="text" value={image} onChange={(e) => setImage(e.target.value)} required />
      </label>
      <input type="submit" value="Add Book" />
    </form>
  );
};

export default AddBook;
