import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import logo from './images/logo-cognosante-rev.svg';

export default function Footer() {
  return (
    <footer id="footer" className="mt-auto py-3 pb-md-5 bg-gray-darkest text-white text-center text-sm-left">
      <Container>
        <Row>
          <Col sm={6}>
            <p>&copy; 2019 All Rights Reserved</p>
          </Col>
          <Col sm={6}>
            <a
              href="http://www.cognosante.com"
              target="_blank"
              rel="noopener noreferrer"
              className="d-inline-block float-sm-right"
            >
              <img src={logo} alt="Cognosante" />
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
