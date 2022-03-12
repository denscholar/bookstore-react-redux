import React from 'react';
import PropTypes from 'prop-types';

import { Container, Col, Row } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './Book.css';
import { removeBookAction } from '../../redux/books/books';

const Book = (props) => {
  const { title, category, id } = props;
  const dispatch = useDispatch();
  const percentage = 60;

  // Remove book
  const handleRemove = (id) => {
    dispatch(removeBookAction(id));
  };
  return (
    <Container className="Lesson-Panel">
      <li>
        <Row className="row-item">
          <Col sm>
            <p className="categories">{category}</p>
            <h3 className="name-title">{title}</h3>
            <p className="name">James Doe</p>
            <div className="button-container">
              <button type="button">Comment</button>
              <button type="button" onClick={() => handleRemove(id)}>Remove</button>
              <button type="button">Edit</button>
            </div>
          </Col>
          <Col sm className="status">
            <CircularProgressbar className="oval-2" value={percentage} />
            <div className="completed-item">
              <p className="percentage">
                {percentage}
                %
              </p>
              <p className="completed">Completed</p>
            </div>
          </Col>
          <Col sm>
            <h3 className="current-chapter">CURRENT CHAPTER</h3>
            <p className="current-lesson">Chapeter 17</p>
            <button type="button" className="btn-book">UPDATE PROGRESS</button>
          </Col>
        </Row>
      </li>
    </Container>
  );
};

Book.propTypes = {
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Book;
