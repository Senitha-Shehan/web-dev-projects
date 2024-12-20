import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

function Footer() {
  return (
    <footer>
      <Container>
        <Row className="align-items-center">
            <MailchimpForm/>
            <Col sm={6}>
            <img src={logo} alt="Logo" />
            </Col>
            <Col sm={6} className="text-center text-sm-end">
            <div className="social-icon">
                <a href=""><img src={navIcon1} alt="" /></a>
                <a href=""><img src={navIcon2} alt="" /></a>
                <a href=""><img src={navIcon3} alt="" /></a>
            </div>
            </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
