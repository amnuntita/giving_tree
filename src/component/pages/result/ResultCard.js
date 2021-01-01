import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import {Link} from 'react-router-dom';

const ResultCard = (props) => {
  return (
    <Col xs={10} md={3}>
      <Card className="mb-4">
        <Card.Img
          variant="top"
          src="/assets/images/book2.jpg"
          className="cardImg"
        />
        <Card.Body>
          <Card.Title>
            <h6>
              Item {props.i} giving out for free. Textbook/ uniform/ bicycle/
              whatsoever
            </h6>
          </Card.Title>
          <Card.Text>
            some description for the item that the author is giving/looking for,
            will be cut off if it is too long
          </Card.Text>
          <Row className="justify-content-end mr-1">
            <Link to='/post'>See more</Link>
          </Row>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ResultCard;
