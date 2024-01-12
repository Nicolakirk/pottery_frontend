import React from "react";

import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-light text-dark p-2">
      <Container>
        <Row>
          <Col className="justify-content-start">
            <h5>Quick Links</h5>
            <ul>
              <li>
                <a href="/admin" className="bg-light text-dark p-1 ">
                  Admin{" "}
                </a>
              </li>

              <li>
                <a href="/contact" className="bg-light text-dark p-1">
                  Contact Us
                </a>
              </li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col>
            <p>&copy; 2023 Sam McLeod</p>
          </Col>
          <Col className="social-icons">
            <a
              href="https://www.facebook.com/yourpage"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-light text-dark p-1"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.twitter.com/yourpage"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-light text-dark p-1"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.instagram.com/yourpage"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-light text-dark p-1"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/company/yourpage"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-light text-dark p-1"
            >
              <FaLinkedin />
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
