/* eslint-disable arrow-body-style */
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './Book.css';

const Book = () => {
  const percentage = 66;
  return (
    <div>
      <Row>
        <Col sm>
          <p>Action</p>
          <h3>The Hunger Games</h3>
          <p>Susan Collins</p>
          <button type="button">Comment</button>
          <button type="button">Remove</button>
          <button type="button">Edit</button>
        </Col>
        <Col sm className="status">
          <CircularProgressbar className="oval-2" value={percentage} />
          <div className="completed-item">
            <p className="percentage">60%</p>
            <p className="completed">Completed</p>
          </div>
        </Col>
        <Col sm>
          <h3 className="current-chapter">CURRENT CHAPTER</h3>
          <p className="current-lesson">Chapeter 17</p>
          <button type="button" className="btn-book">UPDATE PROGRESS</button>
        </Col>
      </Row>
    </div>
  );
};

export default Book;
