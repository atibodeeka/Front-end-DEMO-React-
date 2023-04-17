import React from "react";

function BookList(props) {
  return (
    <div>
      <h1>Welcome to My Book Store</h1>
      <ul>
        {props.books.map((book) => (
          <div key={book.title}>
            <img src={book.image} alt={book.title} />
            <h3>{book.title}</h3>
            <p>by {book.author}</p>
            <p>{book.price.toFixed(2)} THB</p>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default BookList;