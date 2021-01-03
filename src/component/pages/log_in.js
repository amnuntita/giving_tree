import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const LogIn = () => {
  return (
      <div class="parent">
        <Col>
          <h4>Log In</h4>
        </Col>
        <Col md={5}>
          <Form.Group controlId="loginUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control placeholder="username" />
          </Form.Group>
        </Col>
        <Col md={5}>
          <Form.Group controlId="loginPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="****************" />
          </Form.Group>
        </Col>
        <Col>
        <Button type="submit">Log In</Button>
        </Col>
      </div>
  );
};

export default LogIn;
