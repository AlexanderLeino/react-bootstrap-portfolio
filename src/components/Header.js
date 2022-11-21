import React from "react";
import Toggle from "./Toggler";
import Image from "react-bootstrap/Image";
import profilePicture from "../Assets/profile-picture.jpg";
import { Container, Row, Col } from "react-bootstrap";
import HeaderCss from "./Header.css";
import Theme from "./Theme";

function Header({ theme, toggleTheme }) {
  return (
    <>
      <Container className="mt-5 mb-2">
        <Row>
          <div className="toggle">
            <Toggle theme={theme} toggleTheme={toggleTheme} />
          </div>

          <Col className="center" lg={3} md={12} sm={12} xs={12}>
            <Image className="profile-picture" src={profilePicture} />
          </Col>

          <Col lg={6} className="mt-4">
            <h3 className="name">Alexander Leino</h3>
            <h5 className="name">
              Full Stack Developer | Seeking a Full Time Position Developing
              React / JavaScript Applications
            </h5>
          </Col>

          <Col></Col>
        </Row>
      </Container>
    </>
  );
}

export default Header;
