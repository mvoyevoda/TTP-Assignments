import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/ViewBook.css';

const ViewBook = () => {
    const { id } = useParams();
    const [book, setBook] = useState(null);

    useEffect(() => {
        fetchBook();
    }, []);

    async function fetchBook() {

        console.log("entered fetchBook");
        try {
          const response = await fetch('http://localhost:3000/books');
          if (!response.ok) {
            console.error('Fetch request failed:', response);
            return;
          }
      
          const books = await response.json();
          console.log('Fetched books:', books);
          const bookIndex = parseInt(id);
          console.log("id: " + id)
          const foundBook = books[bookIndex]
          console.log('Found book:', foundBook);
          setBook(foundBook);
        } catch (error) {
          console.error('Fetch request threw an error:', error);
        }
    }

    if (!book) {
        return <div>Loading...</div>;
    }

    return (
        <div className="book-details">
            <img src={book.image} alt="book cover" className="book-image" />
            <h2 className="book-title">{book.title}</h2>
            <h3 className="book-author">{book.author}</h3>
        </div>
    );

};

export default ViewBook;
