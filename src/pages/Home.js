import React from "react";
import { Container, Row, Col,} from "react-bootstrap";
import { ImHtmlFive } from "react-icons/im";
import { DiCss3, DiVisualstudio } from "react-icons/di";
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

function Home() {
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
            <div style={{ textAlign: "center", fontSize: "25px", fontWeight: 'bold'}}>
              Welcome To My Portfolio
            </div>
            <div
              style={{
                textAlign: "center",
                fontSize: "18px",
                marginTop: '10px',
                fontWeight: 0
              }}
            >
              After achieving my Bachelors in Finance and working the banking industry for three years I decided to make the switch into tech. I took this leap, because I have insatiable desire to make ones day to day life easier and more effecient. 
            </div>
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
              <div style={{ textAlign: "center", fontSize: '25px', fontWeight: 'bold'}}>
                Technologies I Have Experience With
              </div>
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
            <div style={{ textAlign: "center", fontSize: '25px', fontWeight: 'bold'}}>
              Recent Accolades
            </div>
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
