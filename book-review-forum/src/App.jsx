import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Library from './components/Library';
import AddBook from './components/AddBook';
import { Book, books } from './books.jsx';

function App() {

  const [searchQuery, setSearchQuery] = useState('');
  const handleSearch = (value) => {
    setSearchQuery(value);
  };

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
