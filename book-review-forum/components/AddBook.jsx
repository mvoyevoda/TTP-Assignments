import React, { useRef } from 'react';
import '../styles/AddBook.css';

const AddBook = () => {

  const titleRef = useRef();
  const authorRef = useRef();
  const genreRef = useRef();
  const imageRef = useRef();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const book = {
      title: titleRef.current.value,
      author: authorRef.current.value,
      genre: genreRef.current.value,
      image: imageRef.current.value,
    };

    const response = fetch('http://localhost:3000/books', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(book),
    })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP ERROR! status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      alert('Book Uploaded Successfully!');
      // console.log(data) // if you still want to log the data
    })
    .catch((error) => {
      console.error('ERROR:', error);
      alert('Book upload failed. Please try again.');
    });  

  };

  return (
    <>
      <br></br><br></br>
      <form className="form" onSubmit={handleSubmit}>
        <label>
          Title:
          <input type="text" name="title" ref={titleRef} required />
        </label>
        <label>
          Author:
          <input type="text" name="author" ref={authorRef} required />
        </label>
        <label>
          Genre:
          <input type="text" name="genre" ref={genreRef} required />
        </label>
        <label>
          Image Link:
          <input type="text" name="image" ref={imageRef} required />
        </label>
        <input className="submit-btn" type="submit" value="Add Book" />
      </form>
    </>
  );

};

export default AddBook;
