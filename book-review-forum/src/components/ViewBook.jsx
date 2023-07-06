import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/ViewBook.css';

const ViewBook = () => {
    const { id } = useParams();
    const [book, setBook] = useState(null);

    useEffect(() => {
        fetchBook();
    }, []);

    async function fetchBook() {

        console.log("entered fetchBook");
        try {
          const response = await fetch('http://localhost:3000/books');
          if (!response.ok) {
            console.error('Fetch request failed:', response);
            return;
          }
      
          const books = await response.json();
          const bookIndex = parseInt(id);
          const foundBook = books[bookIndex]
          setBook(foundBook);
        } catch (error) {
          console.error('Fetch request threw an error:', error);
        }
    }

    if (!book) {
        return <div>Loading...</div>;
    }
    
    // const handleDelete = async (id, index) => {
    //   try {
    //     const response = await fetch(`http://localhost:3000/books/${id}/${index}`, {
    //       method: 'DELETE',
    //     });
    //     if (!response.ok) {
    //       console.log('HTTP error ' + response.status);
    //     }
    //     alert("Item deleted");
    //   } catch (error) {
    //     console.error('Unable to delete item.', error);
    //   }
    // };

    const handleDelete = async (bookId, commentIndex) => {
      try {
        // Fetch the book
        let response = await fetch(`http://localhost:3000/books/${bookId}`);
        if (!response.ok) {
          throw new Error('HTTP error ' + response.status);
        }
        let data = await response.json();
    
        // Remove the comment from the book's comments array
        data.comments.splice(commentIndex, 1);
    
        // Update the book with the modified comments array
        response = await fetch(`http://localhost:3000/books/${bookId}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        });
        if (!response.ok) {
          throw new Error('HTTP error ' + response.status);
        }
    
        alert("Comment deleted");
      } catch (error) {
        console.error('Unable to delete comment.', error);
      }
    };

    // const handleEdit = (id, index) => {
    //   return (
    //     <form onSubmit={() => submitEdit(id, index, event.target.myTextArea.value)}>
    //       <label htmlFor="myTextArea">Enter your text:</label><br />
    //       <textarea id="myTextArea" name="myTextArea" rows="4" cols="50"></textarea><br />
    //       <input type="submit" value="Submit" />
    //     </form>
    //   );
    // };

    // const submitEdit = async (bookId, commentIndex, newComment) => {
    //   try {
    //     // Fetch the book
    //     let response = await fetch(`http://localhost:3000/books/${bookId}`);
    //     if (!response.ok) {
    //       throw new Error('HTTP error ' + response.status);
    //     }
    //     let data = await response.json();
    
    //     // Edit the comment in the book's comments array
    //     data.comments[commentIndex].comment = newComment;
    
    //     // Update the book with the modified comments array
    //     response = await fetch(`http://localhost:3000/books/${bookId}`, {
    //       method: 'PUT',
    //       headers: {
    //         'Content-Type': 'application/json'
    //       },
    //       body: JSON.stringify(data)
    //     });
    //     if (!response.ok) {
    //       throw new Error('HTTP error ' + response.status);
    //     }
    
    //     alert("Comment edited");
    //   } catch (error) {
    //     console.error('Unable to edit comment.', error);
    //   }
    // };

    const handleEdit = (id, index) => {
      
      const submitForm= (event) => {
        event.preventDefault();
        const newComment = event.target[textareaId].value;
        submitEdit(id, index, newComment);
      };

      {   
        <form onSubmit={() => submitEdit(id, index, event.target.myTextArea.value)}>
          <label htmlFor="myTextArea">Enter your text:</label><br />
          <textarea id="myTextArea" name="myTextArea" rows="4" cols="50"></textarea><br />
          <input type="submit" value="Submit" />
        </form>
      }
    


      const submitEdit = async (bookId, commentIndex, newComment) => {

        try {
        // Fetch the book
        let response = await fetch(`http://localhost:3000/books/${bookId}`);
        if (!response.ok) {
          throw new Error('HTTP error ' + response.status);
        }
        let data = await response.json();
    
        // Edit the comment in the book's comments array
        data.comments[commentIndex].comment = newComment;
    
        // Update the book with the modified comments array
        response = await fetch(`http://localhost:3000/books/${bookId}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        });
        if (!response.ok) {
          throw new Error('HTTP error ' + response.status);
        }
    
        alert("Comment edited");
        } catch (error) {
          console.error('Unable to edit comment.', error);
        }

      };

   
    
      // ReactDOM.render(textarea, document.getElementById('edit-container'));
    
      return null;
    };
    
    

    const reviews = book.comments.map((review, index) => (
      <div className="review-container" key={index}>
          <span><button onClick={() => handleEdit(book.id, index)}>Edit</button><button onClick={() => handleDelete(book.id, index)}>Delete</button></span>
          <h3>{review.name}</h3>
          <p>Rating: {review.rating} / 5</p>
          <p>{review.comment}</p>
      </div>
    ))

    return (
      <>
        <div className="view-book">
          <img src={book.image} alt="book cover" className="book-image" />
          {/* <div className="book-details"> */}
            {/* <p className="book-title"> Title: {book.title} </p>
            <p className="book-author"> Author: {book.author} </p>
            <p className="book-genre"> Genre: {book.genre} </p> */}
            <div className="reviews">
              <h2>Reviews:</h2>
              {reviews}
            </div>
          {/* </div> */}

        </div>

      </>
    );

};

export default ViewBook;
