import React from "react";
import {
  Container,
  Row,
  Col,
} from "react-bootstrap";

import Back from "../../shared/BackButton.js";
import AuthorInfo from './author_info.js';
import MyCarousel from './carousel.js';

const Post = () => {

  return (
    <div>
      <Back />
      <Container style={{ textAlign: "start" }}>
        <h3>
          Give: Physics I Textbooks for Engineering/Science Freshmen Good
          Condition
        </h3>
        Author: Nattapol Jaijing Date:01/02/2020
        <Row style={{ marginTop: 20, marginBottom: 20 }}>
          <Col md={6}>
           <MyCarousel/>
          </Col>
          <Col md={1}></Col>
          <Col md={3}>
            <AuthorInfo />
          </Col>
        </Row>
        <Col md={7} style={{ padding: 0 }}>
          <h5> Details:</h5>
          <blockquote>
            My used textbook for Physics I course. The condition is 80-90%.
            There are pencil and hilighter marks on some pages. If you wanna
            take this, we can meet around Engineering faculty. I am available
            from Wed-Fri after 4 PM. The List is <br />
            - Serway Physics I <br />
            - P'Ken Physics sheet <br />
            - Mechanical Physics Exercise <br />
          </blockquote>
        </Col>
        <h5>Additional condition:</h5>
        <blockquote>
          <h6>Willing to trade</h6>
          <small class="text-muted">- None / giving for free </small>
        </blockquote>
      </Container>
    </div>
  );
};

export default Post;
