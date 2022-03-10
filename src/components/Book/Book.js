import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import PropTypes from 'prop-types';
import './Book.css';

const Book = ({
  title,
  category,
  author,
  percentage,
}) => (
  <Container className="Lesson-Panel">
    <li>
      <Row className="row-item">
        <Col sm>
          <p>{category}</p>
          <h3>{title}</h3>
          <p>{author}</p>
          <button type="button">Comment</button>
          <button type="button">Remove</button>
          <button type="button">Edit</button>
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

Book.propTypes = {
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default Book;
