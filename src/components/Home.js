import React from "react";
import { Button, Col, Container, Row, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import '../styles/Home.css'

function Home() {
  return (
    <Container
      id="home_container"
      className="d-flex justify-content-center align-items-center flex-column gap-4"
    > <div className='shapeOne'></div>
      <div className='shapeTwo'></div>
      <div className='shapeThree'></div>
      <Row className="h2 pe-3 ps-3">
        <Col>Let's journal about your</Col>
      </Row>
      <Row className="pe-4 ps-4 gap-2 ">
        <Col align="center"  className="pb-2 prime option-wrapper">
          <Nav.Link as={Link} to="/triggers" className="bg-primary p-3 pe-5 ps-5 prime">
            Triggers
          </Nav.Link>
        </Col>
        <Col align="center"  className="pb-2 prime option-wrapper">
          <Nav.Link as={Link} to="/glimmers" className="bg-primary p-3 pe-5 ps-5 prime">
            Glimmers
          </Nav.Link>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
