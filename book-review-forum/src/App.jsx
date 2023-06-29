import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Library from './components/Library';
import AddBook from './components/AddBook';
import { Book, books } from './books.jsx';

function App() {

  const [searchQuery, setSearchQuery] = useState('');

  // const addBook = (book) => {
  //   books.push(book)
  // };
console.log('good book', books[0])
  const handleSearch = (value) => {
    setSearchQuery(value);
  };

  // console.log(books)

  return (
    <Router>
      <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <Routes>
        <Route path="/" element={<Library searchQuery={searchQuery} books={books} />} />
        <Route path="/addBook" element={<AddBook />} />
      </Routes>
    </Router>
  );
}

export default App;
