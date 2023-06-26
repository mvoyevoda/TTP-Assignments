import React, { useState, useEffect } from 'react';
import books from "../books";

const Library = ({ searchQuery }) => {

  const [displayedBooks, setDisplayedBooks] = useState([]);

  useEffect(() => {
    if (searchQuery === '') {
      setDisplayedBooks(books);
    } else {
      const filteredBooks = books.filter((book) =>
        checkTitle(book.title, searchQuery)
      );
      setDisplayedBooks(filteredBooks);
    }
  }, [searchQuery]);

  const checkTitle = (title, searchQuery) => {
    const lowerCaseTitle = title.toLowerCase();
    const lowerCaseQuery = searchQuery.toLowerCase();
  
    const titleLength = lowerCaseTitle.length;
    const queryLength = lowerCaseQuery.length;
  
    // Iterate over the title string
    for (let i = 0; i <= titleLength - queryLength; i++) {
      // Get a substring of the title that's the same length as the search query
      const titleSubstring = lowerCaseTitle.slice(i, i + queryLength);
      if (titleSubstring === lowerCaseQuery) {
        return true;
      }
    }
  
    return false;
  };
  

  const display = displayedBooks.map((book, index) => (
    <img src={book.image} alt={`book-${index}`} key={index} />
  ));

  return <div className="library">{display}</div>;
};

export default Library;

