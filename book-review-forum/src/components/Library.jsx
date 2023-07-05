import React, { useState, useEffect } from 'react';
import { Book, books } from '../books.jsx';

const Library = ({ searchQuery }) => {

  const [displayedBooks, setDisplayedBooks] = useState([]);

  async function fetchBooks() {
    const response = await fetch('http://localhost:3000/books');
    const books = await response.json();
    // console.log("FETCHED BOOKS: " + books)
    setDisplayedBooks(books);
  }

  useEffect(() => {
    const fetchData = async () => {
      if (searchQuery === '') {
        await fetchBooks();
      } else {
        console.log(searchQuery);
        const fetchedBooks = await fetchBooks();
        const filteredBooks = fetchedBooks.filter((book) =>
          checkTitle(book.title, book.author, book.genre, searchQuery)
        );
        setDisplayedBooks(filteredBooks);
      }
    };
    fetchData();
  }, [searchQuery]);
  

  const checkTitle = (title, author, genre, searchQuery) => {

    const lowerCaseQuery = searchQuery.toLowerCase();
    const queryLength = searchQuery.length;

    // Iterate over title string
    const lowerCaseTitle = title.toLowerCase();
    const titleLength = title.length;
    for (let i = 0; i <= titleLength - queryLength; i++) {
      // Get a substring of the title that's the same length as the search query
      const titleSubstring = lowerCaseTitle.slice(i, i + queryLength);
      if (titleSubstring === lowerCaseQuery) {
        return true;
      }
    }
    // Iterate over author string
    const lowerCaseAuthor = author.toLowerCase();
    const authorLength = author.length;
    for (let i = 0; i <= authorLength - queryLength; i++) {
      // Get a substring of the title that's the same length as the search query
      const authorSubstring = lowerCaseAuthor.slice(i, i + queryLength);
      if (authorSubstring === lowerCaseQuery) {
        return true;
      }
    }
    // Check genre (should be exact match, no substring check needed)
    if (genre === searchQuery)
      return true;
  
    return false;

  };
  

  // const display = displayedBooks.map((book, index) => (
  //   <img src={book.image} alt={`book-${index}`} key={index} />
  // ));

  return (
    <div className="library">
      {displayedBooks.length === 0 ? (
        <p>Loading...</p>
      ) : (
        displayedBooks.map((book, index) => (
          <>
            <img src={book.image} alt={`book-${index}`} key={index} />
            <div className="overlay">
              <button className="view-button">View</button>
            </div>
          </>
        ))
      )}
    </div>
  );
  
};

export default Library;

