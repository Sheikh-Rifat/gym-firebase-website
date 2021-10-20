import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import about from "../../images/undraw_Personal_website_re_c8dv.png";

const About = () => {
  return (
    <Container id="about">
      <h1 className="title text-center mt-5">CRUNCH Health Fitness Gym</h1>
      <section className="my-5 About us">
        <Row>
          <Col sm={12} md={6}>
            <div className="mt-5">
              <p className="title ps-3">
                Whether you’re a first-time gym user or a veteran member, we’re
                here to provide a workout environment in which anyone - and
                everyone - can be comfortable.
              </p>
            </div>
            <div className="mt-3 p-3">
              <p>
                No matter what you’re looking for in a gym, we’ve got a
                membership option made for you. All Planet Fitness members enjoy
                unlimited access to their home club and the support of our
                friendly, knowledgeable staff anytime you need it. PF Black
                Card® members receive additional benefits, including the ability
                to bring a guest for free and access to any of our 2,000+ PF
                locations. Looking for a little extra guidance or inspiration to
                help you meet your fitness goals? As a PF member, you can take
                advantage of our free fitness training or find your motivation
                by reading real member experiences on Planet of Triumphs.
              </p>
              <Link to={`/contact`}>
                <Button className="custom-btn">Learn More</Button>
              </Link>
            </div>
          </Col>
          <Col sm={12} md={6}>
            <div className="">
              <img src={about} alt="options" className="img-fluid" />
            </div>
          </Col>
        </Row>
      </section>
    </Container>
  );
};

export default About;
