import React from "react";
import { Form, Container, Col, Row,Button } from "react-bootstrap";

const SignUp = () => {
  const personal = () => {
    return (
      <div style={{marginTop:10}}>
        <h6>Personal Info</h6>
        <hr/>
        <Row>
          <Col xs={6} md={5}>
            <Form.Group controlId="nameinput">
              <Form.Label>Name</Form.Label>
              <Form.Control placeholder="Surname" />
            </Form.Group>
          </Col>
          <Col xs={6} md={5}>
            <Form.Group controlId="lastnameinput">
              <Form.Label>Last Name</Form.Label>
              <Form.Control placeholder="Lastname" />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col xs={6} md={5}>
            <Form.Group controlId="email">
              <Form.Label>Email &nbsp; (Chula mail only)</Form.Label>
              <Form.Control
                type="email"
                placeholder="6134595520@student.chula.ac.th"
              />
            </Form.Group>
          </Col>
          <Col xs={6} md={4}>
            <Form.Group controlId="faculty">
              <Form.Label>Faculty</Form.Label>
              <Form.Control as="select" defaultValue="Engineering">
                <option value="21">Engineering</option>
                <option value="22">Arts</option>
                <option value="23">Political Science</option>
                <option value="24">Science</option>
              </Form.Control>
            </Form.Group>
          </Col>
        </Row>
      </div>
    );
  };

  const account = () => {
    return (
      <div>
        <h6>Account Info</h6>
        <hr/>
        <Row>
          <Col md={4}>
            <Form.Group controlId="username">
              <Form.Label>Username</Form.Label>
              <Form.Control placeholder="username" />
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="password" />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <Form.Group controlId="bio">
              <Form.Label> Bio</Form.Label>
              <Form.Control as="textarea" placeholder="About me..." />
            </Form.Group>
          </Col>
        </Row>
      </div>
    );
  };

  return (
    <Container>
      <h3 style={{ marginTop: 40 }}>Sign Up</h3>
      <Form>
      <div style={{height:10}}></div>
        {personal()}
        <div style={{height:30}}></div>
        {account()}
      </Form>
      <Row style={{justifyContent:"flex-end"}}>
          <Button type="submit">Submit</Button>
      </Row>
    </Container>
  );
};

export default SignUp;
