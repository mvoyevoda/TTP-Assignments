import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Library from '../components/Library';
// import addBook from './addBook';

function App() {

  const [searchQuery, setSearchQuery] = useState('');
  const handleSearch = (value) => {
    setSearchQuery(value);
  };

  return (
    <>
      <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <Library searchQuery={searchQuery} />
    </>
  );
}

export default App;
