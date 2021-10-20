import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Footer.css";
import footerLogo from "../../images/logo-1.svg";
const Footer = () => {
  return (
    <>
      <div className="closest-location text-center p-5">
        <h1 className="text-light">Subscribe to Our NewsLetter</h1>
      </div>
      <div className="p-5 footer">
        <Container className="text-light">
          <section className="my-5 Footer">
            <Row>
              <Col sm={12} md={4}>
                <div className="mt-2">
                  <ul>
                    <p>
                      <strong>COMPANY</strong>
                    </p>
                    <li>
                      <strong> PRIVACY POLICY</strong>
                    </li>
                    <li>
                      <strong> CAREERS</strong>
                    </li>
                    <li>
                      <strong> TERMS & CONDITIONS</strong>
                    </li>
                  </ul>
                </div>
              </Col>
              <Col sm={12} md={4}>
                <div className="mt-2">
                  <img src={footerLogo} alt="" className="img-fluid" />
                </div>
              </Col>
              <Col sm={12} md={4}>
                <div className="mt-2">
                  <ul>
                    <p>
                      <strong>MEMBERS</strong>
                    </p>
                    <li>
                      <strong> THE ANYTIME FITNESS APP</strong>
                    </li>
                    <li>
                      <strong> FAQ</strong>
                    </li>
                    <li>
                      <strong> Contact Us</strong>
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
          </section>
        </Container>
      </div>
    </>
  );
};

export default Footer;
