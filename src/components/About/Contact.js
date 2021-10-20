import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import contact from "../../images/undraw_contact_us_15o2.png";

const Contact = () => {
  return (
    <Container id="contact" className="mt-5">
      <h1 className="title text-center mt-5">Contact For More</h1>
      <section className="my-5 About us">
        <Row>
          <Col sm={12} md={6}>
            <div className="mt-5">
              <h1 className="title ps-3">CONTACT YOUR HOME CLUB</h1>
            </div>
            <div className="mt-3 p-3">
              <p>
                As each club is a privately-owned franchise, the best place to
                get help to your questions and concerns is in your home club.
                Call or stop by your home club location and speak with a staff
                member at the front desk - they will be more than happy to
                assist you.
              </p>
              <ul>
                <li>Mobile : +88012234467</li>
                <li>Phone : +0224485</li>
                <li>Mail : contact@crunch.com</li>
              </ul>
            </div>
          </Col>
          <Col sm={12} md={6}>
            <div className="">
              <img src={contact} alt="options" className="img-fluid" />
            </div>
          </Col>
        </Row>
      </section>
    </Container>
  );
};

export default Contact;
