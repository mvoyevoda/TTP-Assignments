import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/NavBar.css';

const Navbar = ({ searchQuery, setSearchQuery }) => {

  const [search, setSearch] = useState(false);
  const expandSearchBar = () => {setSearch(true)};

  const updateSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <nav>
      <h1>Book Review Forum</h1>
      <div className="right">
        <Link to="/">Books</Link>
        <Link to="/addBook">Add Book</Link>
        <img
          className="search-icon"
          onClick={expandSearchBar}
          src="../assets/search-icon.png"
          alt="Search Icon"
        />
        <input 
            className={`searchbar ${search ? 'open' : ''}`} 
            placeholder="search..." 
            onInput={updateSearch}
        />
      </div>
    </nav>
  );
  
};

export default Navbar;
