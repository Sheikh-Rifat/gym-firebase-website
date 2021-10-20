import React from "react";
import { Button, Card, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Service.css";

const Service = ({ service }) => {
  const { id, image, Name, tag, price, duration } = service;

  return (
    <Container>
      <Col className="h-100 service">
        <Card className="h-100 ">
          <Card.Img variant="top" src={image} />
          <Card.Body className="custom-card">
            <Card.Title className="mt-4">
              <h3>{Name}</h3>
            </Card.Title>
            <Card.Text className="pt-5 fs-5">{tag}</Card.Text>
            <Card.Text>
              <strong> Cost : {price}</strong>
            </Card.Text>
            <Card.Text>
              <strong>Duration :{duration}</strong>
            </Card.Text>
            {/* link to services page */}
            <Link to={`/details/${id}`}>
              <Button className="custom-btn">View Details</Button>
            </Link>
          </Card.Body>
        </Card>
      </Col>
    </Container>
  );
};

export default Service;
