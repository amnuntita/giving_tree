import React from "react";
import { Container, Row, Col, Button, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

import NewPost from './NewPost.js';

import Footer from '../../shared/Footer.js';

const Home = () => {
  const loremText =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pretium interdum mauris, id malesuada turpis interdum et. Nulla commodo laoreet sem a rutrum. Vestibulum rutrum justo eu aliquam ornare. Aenean hendrerit eu nisl ultricies volutpat.Nulla commodo laoreet sem a rutrum. Vestibulum rutrum justo eu aliquam ornare. Aenean hendrerit eu nisl ultricies volutpat.";

  const intro = () => (
    <Row>
      <Col xs={12} md={5} className="textbox">
        <h1 className="display-5">
          Give, Take <br /> & Trade
        </h1>
        {loremText}
        <div>
          <Link to="/signup">
            <Button variant="outline-primary" className="btn">
              Sign Up
            </Button>
          </Link>
        </div>
        Already have an account? &nbsp; <Link to="/login">Log In</Link>
      </Col>
      <Col md={4}>
        <Image src="/assets/images/intro.png" className="homeImg" />
      </Col>
    </Row>
  );
  const lead = (type) => {
    return (
      <Col md={4} style={{ textAlign: "center", marginTop: 20 }}>
        <h4>{type}</h4>
        <p style={{ textAlign: "start" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique. Duis cursus, mi quis viverra
          ornare,
        </p>
        <Button variant="outline-primary" className="btn">
          {type}
        </Button>
      </Col>
    );
  };

  const about = () => (
    <div className="about">
      <Container className="textbox">
        <Row>
          <h3>Why Giving Tree?</h3>
        </Row>
        <Row>
          <Col md={7}>
            <Image src="assets/images/about1.png" className="homeImg" />
          </Col>
          <Col className="textbox">{loremText}</Col>
        </Row>
      </Container>
    </div>
  );

  return (
    <div>
      <Container>
        {intro()}
        <Row style={{ marginBottom: 20 }}>
          {lead("Give")}
          {lead("Take")}
          {lead("Trade")}
        </Row>
        <NewPost cat='g'/>
        <NewPost cat='t'/>
        <NewPost cat='tr'/>
      </Container>
      {about()}
      <Footer/>
    </div>
  );
};

export default Home;
