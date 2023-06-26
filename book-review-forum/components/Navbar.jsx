import React, { useState } from 'react';

const Navbar = () => {

  const [search, setSearch] = useState(false);
  const handleMouseEnter = () => {setSearch(true)};
  const handleMouseLeave = () => {setSearch(false)};

  return (
    <nav>
      <h1>Book Review Forum</h1>
      <div className="right">
        <a href="../index.html">Books</a>
        <a href="../favorites.html">Favorites</a>
        <a href="../addBook.html">Add Book</a>
        <img
          className="search-icon"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          src="../assets/search-icon.png"
          alt="Search Icon"
        />
        {/* Expand search bar if mouse is on the search icon */}
        {search && <input placeholder="search..." />}
      </div>
    </nav>
  );
  
};

export default Navbar;
