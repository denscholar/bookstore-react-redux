/* eslint-disable max-len */
import React from 'react';
import { useSelector } from 'react-redux';
import Book from '../Book/Book';
import hooks from '../../hook/hook';

const Books = () => {
  const books = useSelector((state) => state.books);
  hooks();
  return (
    <div>
      <ul>
        {books.map((book) => <Book key={book.item_id} id={book.item_id} title={book.title} category={book.category} />)}
      </ul>
    </div>
  );
};

export default Books;
