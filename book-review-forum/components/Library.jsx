// import React from 'react';
// import books from "../books.jsx";

// const Library = () => {
//   let display = (<div className="library">)

//   for (const book of books) {
//     display += (<img src={book.image} />)
//   }

//   display += (</div>)
//   return display;
// };

// export default Library;

import React from 'react';
import books from "../books";

const Library = () => {
  const display = books.map((book, index) => {
    return <img src={book.image} alt={`book-${index}`} key={index} />
  });

  return <div className="library">{display}</div>
};

export default Library;