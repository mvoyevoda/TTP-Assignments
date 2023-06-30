import React, { useRef } from 'react';
import '../styles/AddBook.css';

const AddBook = () => {

  const titleRef = useRef();
  const authorRef = useRef();
  const genreRef = useRef();
  const imageRef = useRef();

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Create a book object using the current value of each input
    const book = {
      title: titleRef.current.value,
      author: authorRef.current.value,
      genre: genreRef.current.value,
      image: imageRef.current.value,
      // title: "test",
      // author: "test",
      // genre: "test",
      // image: "test"
    };

    fetch('http://localhost:3000/books', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(book),
    })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error('Error:', error));

  //  const g = {'rfreert': 3};
  //   try {
  //     console.log('Sending:', book); // Log the book object

  //     const response = await fetch('http://localhost:3000/Books', {
  //       // credentials: "*same-origin",
  //       // mode: "*cors",
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify(book),
  //     });

  //     // return response.json()
  //     console.log(response);

  //     if (response.ok) {
  //       // Reset form fields
  //      const stuff = await response.json()
  //       titleRef.current.value = '';
  //       authorRef.current.value = '';
  //       genreRef.current.value = '';
  //       imageRef.current.value = '';
  //       console.log(stuff)
  //     } else {
  //       console.error(`Error: ${response.status} ${response.statusText}`);
  //     }
  //   } catch (error) {
  //     console.error('Error:', error.status);
  //   }
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
        <input type="submit" value="Add Book" />
      </form>
    </>
  );

};

export default AddBook;
