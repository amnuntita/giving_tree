import React from "react";
import {
  Container,
  Row,
  Col,
  UncontrolledCarousel,
  List,
  Button,
} from "reactstrap";
import Back from '../shared/BackButton.js';

const Post = () => {
  const pics = [
    {
      src: "/assets/images/book2.jpg",
    },
    {
      src: "/assets/images/book3.jpg",
    },
  ];

  return (
    <div>
      <Back />
      <Container style={{textAlign: "start" }}>
        <h3>
          Free Physics I Textbooks for Engineering/Science Freshmen Good
          Condition
        </h3>
        Author: Nattapol Jaijing Date:01/02/2020
        <Row style={{ marginTop: 20, marginBottom: 20 }}>
          <Col md="6">
            <UncontrolledCarousel
              items={pics}
              interval={false}
              className="carousel"
            />
          </Col>
          <Col md="1"></Col>
          <Col md="3">
            <h6>Contact:</h6>
            <List>
              <li>Facebook: Nuttapol Kai</li>
              <li>Line ID: nuttapol1ok</li>
            </List>
            <h6>Area:</h6>
            <List>
              <li>Phaya Tai</li>
              <li>Sam Yan</li>
            </List>
          </Col>
        </Row>
        <Col md="7" style={{ padding: 0 }}>
          <h5> Details:</h5>
          <blockquote>
            My used textbook for Physics I course. The condition is
            80-90%. There are pencil and hilighter marks on some pages. If you
            wanna take this, we can meet around Engineering faculty. I am
            available from Wed-Fri after 4 PM.
            The List is <br/>
              - Serway Physics I <br/>
              - P'Ken Physics sheet <br/>
              - Mechanical Physics Exercise <br/>
          </blockquote>
        </Col>
        <h5>Additional condition:</h5>
      </Container>
    </div>
  );
};

export default Post;
