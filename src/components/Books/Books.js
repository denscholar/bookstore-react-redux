/* eslint-disable max-len */
import React from 'react';
import Book from '../Book/Book';
import Form from '../Form/Form';

const Books = () => {
  const bookList = [
    {
      title: 'The Early sun',
      author: 'John Doe',
      id: 1,
      category: 'Action',
      percentage: 50,
    },
    {
      title: 'The Return of James Doe',
      author: 'John Doe',
      id: 2,
      category: 'Fiction',
      percentage: 30,
    },
    {
      title: 'Lover Girl',
      author: 'John Doe',
      id: 3,
      category: 'Fiction',
      percentage: 10,
    },
  ];
  return (
    <div>
      <ul>
        {bookList.map((book) => (
          <Book key={book.id} title={book.title} percentage={book.percentage} author={book.author} category={book.category} />
        ))}
      </ul>
      <Form />
    </div>
  );
};

export default Books;
