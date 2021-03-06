import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import {Link} from 'react-router-dom';
import BaseUrl from './../../../BaseUrl.js';

const ResultCard = (props) => {
  const id = props.id
  const title = props.title;
  const detail = props.detail;
  const img = props.img;
  return (
    <Col xs={10} md={3}>
      <Card className="mb-4"> 
        <Card.Img
          variant="top"
          src={BaseUrl+'/'+img+'.jpg'}
          className="cardImg"
        />
        <Card.Body className="cardSize">
          <Card.Title>
            <h6>
              {title}
            </h6>
          </Card.Title>
          <Card.Text>
            <small>{detail}</small>
          </Card.Text>
        </Card.Body>
        <Row className="justify-content-end mr-3 mb-2">
            <Link to={'/post/'+id}>See more</Link>
          </Row>
      </Card>
    </Col>
  );
};

export default ResultCard;
