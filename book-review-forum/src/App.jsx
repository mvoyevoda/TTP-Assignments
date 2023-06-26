import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Library from '../components/Library';

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
