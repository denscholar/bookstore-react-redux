/* eslint-disable max-len */
import React from 'react';
import { useSelector } from 'react-redux';
import Book from '../Book/Book';

const Books = () => {
  const books = useSelector((state) => state.books);
  return (
    <div>
      <ul>
        {books.map((book) => {
          const { id, title, category } = book;
          return <Book key={id} id={id} title={title} category={category} />;
        })}
      </ul>
    </div>
  );
};

export default Books;
