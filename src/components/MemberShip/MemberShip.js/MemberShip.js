import Button from "@restart/ui/esm/Button";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./MemberShip.css";
const MemberShip = () => {
  return (
    <div className="membership-section">
      <Container>
        <Row>
          <Col sm={12} md={6}>
            <div className="mt-5">
              <h1 className="title">CLASSIC MEMBERSHIP</h1>
              <ul className="p-3 m-3">
                <li>Unlimited Access to Home Club</li>
                <li>Free Fitness Training</li>
                <li>Free WiFi*</li>
              </ul>
              <Button className="custom-btn">Choose Plan</Button>
            </div>
          </Col>
          <Col sm={12} md={6}>
            <div className="mt-5">
              <h1 className="title">PREMIUM MEMBERSHIP</h1>
              <ul className="p-3 m-3">
                <li>Unlimited Access to Home Club</li>
                <li>Free Fitness Training</li>
                <li>Free WiFi*</li>
                <li>Use of Massage Chairs</li>
                <li>50% Off Drinks**</li>
                <li>Use of Total Body Enhancement*</li>
              </ul>
              <Button className="custom-btn">Choose Plan</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MemberShip;
