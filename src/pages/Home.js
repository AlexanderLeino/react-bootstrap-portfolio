import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ImHtmlFive } from "react-icons/im";
import { DiCss3 } from "react-icons/di";
import {
  SiJavascript,
  SiJquery,
  SiGraphql,
  SiReact,
  SiMysql,
  SiMongodb,
  SiExpress,
} from "react-icons/si";
import { FaNode } from "react-icons/fa";
import HomeCss from "./Home.css";

function Home({ theme }) {
  return (
    <>
      <Container>
        <Row>
          <Container
            className="mt-4 text-container p-4 "
            style={{
              maxWidth: "fit-content",
              borderRadius: "25px",
              boxShadow: "5px 5px 5px 1px #888888",
            }}
          >
            <h2 style={{ textAlign: "center", fontWeight: "600" }}>
              Welcome To My Portfolio
            </h2>
            <p
              style={{
                textAlign: "center",
                fontSize: "20px",
                fontWeight: "600",
              }}
            >
              Within the last year, I decided to switch careers from being a
              Loan Officer to Software Development
            </p>
            <p
              style={{
                textAlign: "center",
                fontSize: "20px",
                fontWeight: "600",
              }}
            >
              I obtained my Full Stack Certification from Trilogy Education in
              partnership with Michigan State University on Jnauary 19th, 2022.
            </p>
          </Container>

          <Container>
            <Container
              className="mt-5 text-container p-4"
              style={{
                maxWidth: "fit-content",
                borderRadius: "25px",
                boxShadow: "5px 5px 5px 1px #888888",
              }}
            >
              <h2 style={{ textAlign: "center", fontWeight: "600" }}>
                Technologies I Have Experience With
              </h2>
              <Row
                className="mt-5"
                style={{ display: "flex", justifyContent: "space-evenly" }}
              >
                <Col
                  style={{ display: "flex", justifyContent: "center" }}
                  lg={2}
                  md={3}
                  sm={3}
                  xs={2}
                >
                  <ImHtmlFive size={50} />
                </Col>

                <Col
                  style={{ display: "flex", justifyContent: "center" }}
                  lg={2}
                  md={3}
                  sm={3}
                  xs={2}
                >
                  <DiCss3 size={50} />
                </Col>
                <Col
                  style={{ display: "flex", justifyContent: "center" }}
                  lg={2}
                  md={3}
                  sm={3}
                  xs={2}
                >
                  <SiJavascript size={50} />
                </Col>
                <Col
                  style={{ display: "flex", justifyContent: "center" }}
                  lg={2}
                  md={3}
                  sm={3}
                  xs={2}
                >
                  <SiJquery size={50} />
                </Col>
                <Col
                  style={{ display: "flex", justifyContent: "center" }}
                  lg={2}
                  md={3}
                  sm={3}
                  xs={2}
                >
                  <SiGraphql size={50} />
                </Col>
              </Row>
              <Row
                style={{ display: "flex", justifyContent: "space-evenly" }}
                className="mt-4"
              >
                <Col
                  style={{ display: "flex", justifyContent: "center" }}
                  lg={2}
                  md={3}
                  sm={3}
                  xs={2}
                >
                  <SiReact size={50} />
                </Col>
                <Col
                  style={{ display: "flex", justifyContent: "center" }}
                  lg={2}
                  md={3}
                  sm={3}
                  xs={2}
                >
                  <SiMysql size={50} />
                </Col>
                <Col
                  style={{ display: "flex", justifyContent: "center" }}
                  lg={2}
                  md={3}
                  sm={3}
                  xs={2}
                >
                  <SiMongodb size={50} />
                </Col>
                <Col
                  style={{ display: "flex", justifyContent: "center" }}
                  lg={2}
                  md={3}
                  sm={3}
                  xs={2}
                >
                  <SiExpress size={50} />
                </Col>
                <Col
                  style={{ display: "flex", justifyContent: "center" }}
                  lg={2}
                  md={3}
                  sm={3}
                  xs={3}
                >
                  <FaNode size={50} />
                </Col>
              </Row>
            </Container>
          </Container>
          <Container
            className="mt-5 text-container p-4 "
            style={{
              maxWidth: "fit-content",
              padding: "10px",
              borderRadius: "25px",
              boxShadow: "5px 5px 5px 1px #888888",
            }}
          >
            <h1 style={{ textAlign: "center", fontWeight: "600" }}>
              Recent Accolades
            </h1>
            <Row className="accolades-container  mt-3">
              <Col
                style={{
                  textAlign: "center",
                  marginBottom: ".75rem",
                  fontSize: "20px",
                }}
              >
                Trilogy Bootcamp Certificate Recipient 22'
              </Col>
              <Col
                style={{
                  textAlign: "center",
                  marginBottom: ".75rem",
                  fontSize: "20px",
                }}
              >
                Achieved Bachelors in Finance from Western Michigan University
                21'{" "}
              </Col>
              <Col style={{ textAlign: "center", fontSize: "20px" }}>
                i-Lead Award Recipient PNC 2021
              </Col>
            </Row>
          </Container>
        </Row>
      </Container>
    </>
  );
}

export default Home;
