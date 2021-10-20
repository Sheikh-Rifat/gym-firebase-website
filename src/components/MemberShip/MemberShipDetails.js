import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import options from "../../images/undraw_Select_re_3kbd.png";
const MemberShipDetails = () => {
  return (
    <div>
      <Container id="membership">
        <section className="my-5">
          <Row>
            <Col sm={12} md={6}>
              <div className="mt-5">
                <img src={options} alt="options" className="img-fluid" />
              </div>
            </Col>
            <Col sm={12} md={6}>
              <div className="mt-5">
                <h1 className="title ps-3">Member-Ship</h1>
              </div>
              <div className="mt-3 p-3">
                <p>
                  Get a CRUNCH gym membership now, and join a squeaky clean and
                  spacious club! We offer the Classic Membership and PF Black
                  Card® Membership. Both get you access to our Judgement Free
                  Zone®, and tons of cardio and strength equipment. * Items
                  marked with a * are available at participating locations only.
                  See club for details. ** Items marked with a ** restrictions
                  may apply.
                </p>
                <Link to={`/membership`}>
                  <Button className="custom-btn">Pick A Plan</Button>
                </Link>
              </div>
            </Col>
          </Row>
        </section>
      </Container>
    </div>
  );
};

export default MemberShipDetails;
