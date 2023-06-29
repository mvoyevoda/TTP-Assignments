import React, { useState } from 'react';
import '../styles/AddBook.css';

const AddBook = ({ addBook }) => {
  const initialBookState = {
    title: '',
    author: '',
    genre: '',
    image: '',
  };
  const [book, setBook] = useState(initialBookState);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setBook((prevBook) => ({
      ...prevBook,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:3000/books', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(book),
      });

      if (response.ok) {
        const addedBook = await response.json();
        addBook(addedBook);
        setBook(initialBookState);
      } else {
        console.log('Error:', response.statusText);
      }
    } catch (error) {
      console.log('Error:', error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input type="text" name="title" value={book.title} onChange={handleChange} required />
      </label>
      <label>
        Author:
        <input type="text" name="author" value={book.author} onChange={handleChange} required />
      </label>
      <label>
        Genre:
        <input type="text" name="genre" value={book.genre} onChange={handleChange} required />
      </label>
      <label>
        Image Link:
        <input type="text" name="image" value={book.image} onChange={handleChange} required />
      </label>
      <input type="submit" value="Add Book" />
    </form>
  );
};

export default AddBook;
