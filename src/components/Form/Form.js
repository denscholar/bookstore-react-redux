import React from 'react';
import { Container } from 'react-bootstrap';
import './Form.css';

const Form = () => (
  <Container style={{ padding: '18px' }}>
    <form className="form-inline">
      <input type="text" placeholder="Book Title" name="bookTitle" />
      <select name="categories" className="category">
        <option value="select">Category</option>
        <option value="action">Volvo</option>
        <option value="fiction">Saab</option>
        <option value="horror">Opel</option>
        <option value="non-fiction">Audi</option>
      </select>
      <div className="button">
        <button type="button">ADD BOOK</button>
      </div>
    </form>
  </Container>
);

export default Form;
