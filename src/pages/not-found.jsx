import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import { FrownOpen } from '../icons';

export default () => (
  <Container className="mt-4">
    <Row>
      <Col className="pt-5 text-center">
        <h1 className="mb-3">Page Not Found</h1>
        <p>
          <FrownOpen size="5x" color="gray" />
        </p>
        <p>We&#39;re sorry but we can&#39;t find the page you&#39;re looking for.</p>
        <p>
          Please choose a link from the navigation or <Link to="/">visit the home page</Link>.
        </p>
      </Col>
    </Row>
  </Container>
);
