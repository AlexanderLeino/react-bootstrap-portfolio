import React, { useEffect, useState } from "react";
import {
  Container,
  Image,
  Row,
  Col,
  Button,
} from "react-bootstrap";
import ButtonContainerCss from "../components/ButtonContainer.css";
import { projectsArray } from "../projectsData/projectData";

function ButtonContainer() {
  let newArray = [];
  const [filteredOptions, setFilteredOptions] = useState("all");
  const [filteredProjects, setFiliteredProjects] = useState(projectsArray);

  useEffect(() => {
    filteredProjects.map((project) => {
      if (project.tags.includes(filteredOptions)) {
        newArray.push(project);
      } else {
        return;
      }
      setFiliteredProjects(newArray);
    });
  }, [filteredOptions]);

  const handleChange = (target) => {
    setFilteredOptions(target.target.value);
    setFiliteredProjects(projectsArray);
  };

  return (
    <>
      <Container className="mt-5 buttonContainer" size="sm">
        <button
          style={{ fontWeight: "600", borderRadius: "25px" }}
          value="all"
          onClick={handleChange} 
          className="button1"
          
        >
          All
        </button>
        <button
          style={{ fontWeight: "600", borderRadius: "25px" }}
          className="button2"
          value="fullStack"
          onClick={handleChange}
        >
          Full Stack
        </button>
        <button
          style={{ fontWeight: "600", borderRadius: "25px"}} 
          className="button3"
          value="frontEnd"
          onClick={handleChange}
        >
          Front End
        </button>
      </Container>
      <Container className=" mt-5" fluid="sm">
        <Row>
          {filteredProjects.map((project, index) => {
            return (
              <>
                <Container
                  key={index}
                  as="div"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-evenly",
                  }}
                >
                  <Row className="project-wrapper">
                    <Container
                      as="div"
                      className="text-container"
                      style={{
                        display: "flex",
                        maxWidth: "fit-content",
                        borderRadius: "25px",
                        marginBottom: "30px",
                      }}
                    >
                      <Row
                        className="center"
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignContent: "center",
                          marginBottom: "20px",
                          textAlign: "center",
                        }}
                      >
                        <h1
                          style={{
                            textAlign: "center",
                            fontWeight: "600",
                            fontSize: "35px",
                            marginTop: "10px",
                          }}
                        >
                          {project.title}
                        </h1>

                        <Col lg={6} md={12} sm={12} xs={12}>
                          <div style={{display: 'flex', alignItems: 'center', height: '100%'}}>
                            <Image
                              style={{
                                borderRadius: "25px",
                                padding: "10px",
                                overflow: "hidden",
                                width: "100%",
                              }}
                              src={project.image}
                            />
                          </div>
                        </Col>
                        <Col lg={6}>
                          <h2
                            style={{ textAlign: "center", fontWeight: "600", fontSize: '30px' }}
                          >
                            Description
                          </h2>
                          <div style={{fontWeight: 0, fontSize: '15px' }}>{project.description}</div>
                          <h5 style={{ fontWeight: "600", marginTop: "10px", fontSize: '20px' }}>
                            Built With:{" "}
                          </h5>
                          <Container
                            as="div"
                            style={{
                              display: "flex",
                              justifyContent: "space-evenly",
                              flexWrap: "wrap",
                            }}
                          >
                            {project.icons.map((icon, index) => {
                              return (
                                <div
                                  style={{
                                    fontSize: "35px",
                                    marginBottom: "20px",
                                  }}
                                >
                                  {icon}
                                </div>
                              );
                            })}
                          </Container>
                          <Container
                            as="div"
                            style={{
                              display: "flex",
                              justifyContent: "space-around",
                            }}
                          >
                            <a href={project.deploy} rel="noreferrer" target="_blank">
                              <Button
                                style={{
                                  fontWeight: "600",
                                  backgroundColor: "white",
                                  color: "black",
                                  borderRadius: "25px",
                                  marginBottom: "15px",
                                }}
                                className="button"
                              >
                                Deploy App
                              </Button>
                            </a>
                            <a href={project.code} rel="noreferrer" target="_blank">
                              <Button
                                style={{
                                  fontWeight: "600",
                                  backgroundColor: "white",
                                  color: "black",
                                  borderRadius: "25px",
                                  marginBottom: "15px",
                                }}
                                className="button"
                              >
                                Source Code
                              </Button>
                            </a>
                          </Container>
                        </Col>
                      </Row>
                    </Container>
                  </Row>
                </Container>
              </>
            );
          })}
        </Row>
      </Container>
    </>
  );
}

export default ButtonContainer;
