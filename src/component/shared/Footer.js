import React from "react";
import { Col,Row,Container } from "react-bootstrap";
import {Link} from "react-router-dom";

const Footer = () => {
  return <div className="footer">
      <Container>
      <Row>
      <Col xs={12} md={5}>
          <div>
          <h5>Contact</h5>
          <ul>
              <li>Facebook: Giving Tree Chula</li>
              <li>Tel. 065-345-2203</li>
              <li>Email: givingtree@chula.ac.th</li>
          </ul>
          </div>
      </Col>
      <Col xs={12} md={5}>
          <h5>Support Us</h5>
          <ul>
              <li>SCB: 184-224-5633 Nuttapol J. Chamchuri SQ branch</li>
              <li><Link>SCB QR code</Link></li>
          </ul>
      </Col>
      </Row>
      </Container>
  </div>;
};

export default Footer;
