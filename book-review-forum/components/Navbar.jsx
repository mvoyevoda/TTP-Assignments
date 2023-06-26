import React, { useState } from 'react';

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
        <a href="../index.html">Books</a>
        <a href="../favorites.html">Favorites</a>
        <a href="../addBook.html">Add Book</a>
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



// import React, { useState } from 'react';

// const Navbar = ({ handleSearch }) => {

//   const [search, setSearch] = useState(false);

//   const expandSearchBar = () => {
//     setSearch(true);
//   };

//   const executeSearch = (event) => {
//     const value = event.target.value;
//     // setSearch(value);
//     executeSearch(value);
//     console.log(searchQuery)
//   };

//   return (
//     <nav>
//       <h1>Book Review Forum</h1>
//       <div className="right">
//         <a href="../index.html">Books</a>
//         <a href="../favorites.html">Favorites</a>
//         <a href="../addBook.html">Add Book</a>
//         <img
//           className="search-icon"
//           onClick={expandSearchBar}
//           src="../assets/search-icon.png"
//           alt="Search Icon"
//         />
//         <input
//           className={`searchbar ${search ? 'open' : ''}`}
//           placeholder="search..."
//           onInput={executeSearch}
//         />
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
