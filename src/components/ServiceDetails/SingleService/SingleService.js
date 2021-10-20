import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./SingleService.css";

const SingleService = ({ singleService }) => {
  const { Name, image, description, price, duration } = singleService;
  return (
    <Container>
      <section className="mt-5">
        <Row className="mt-5">
          {/* image section */}
          <Col sm={12} md={6}>
            <div className="my-5 img-description">
              <img src={image} alt="serviceImage" />
            </div>
          </Col>
          <Col sm={12} md={6}>
            <div className="my-5">
              <h1 className="title">{Name}</h1>
              <p className="description">{description}</p>
              <p className="description">Expected Duration : {duration}</p>
              <p className="text-start px-5 fs-5">price : {price}</p>
            </div>
          </Col>
        </Row>
      </section>
    </Container>
  );
};

export default SingleService;
