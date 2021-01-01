import React from "react";
import {
  Container,
  Row,
  Col,
} from "react-bootstrap";

import Back from "../../shared/BackButton.js";
import AuthorInfo from './AuthorInfo.js';
import MyCarousel from './Carousel.js';
import Footer from '../../shared/Footer.js';

const Post = () => {

  const items = ['assets/images/book1.jpg','assets/images/book2.jpg','assets/images/book3.jpg']
  const title = "Give: Physics I Textbooks for Engineering/Science Freshmen Good Condition"
  const author = "Nattapol Jaijing"
  const date = "01/02/2020"
  const condition = "- None / giving for free "


  return (
    <div>
      <Back />
      <Container>
        <h3>
          {title}
        </h3>
        Author: {author} Date: {date}
        <Row style={{ marginTop: 20, marginBottom: 20 }}>
          <Col md={6}>
           <MyCarousel items={items}/>
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
          <small class="text-muted">{condition} </small>
        </blockquote>
      </Container>
    </div>
  );
};

export default Post;
