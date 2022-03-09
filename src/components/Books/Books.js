import React from 'react';
import { Container } from 'react-bootstrap';
import './Books.css';
import Book from '../Book/Book';
import Form from '../Form/Form';

const Books = () => (
  <>
    <Container className="Lesson-Panel">
      <Book />
    </Container>
    <div>
      <Form />
    </div>
  </>

);

export default Books;
