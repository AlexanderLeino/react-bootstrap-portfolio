import React, { useEffect, useState } from "react";
import Toggle from "./Toggler";
import Image from "react-bootstrap/Image";
import profilePicture from "../Assets/profile-picture.jpg";
import { Container, Row, Col } from "react-bootstrap";
import HeaderCss from "./Header.css";
import Theme from "./Theme";
let index = 0  

let cliftonStrengths = ["Futuristic", "Consistency", "Achiever", "Focus", "Adaptability"]

function Header({ theme, toggleTheme }) {

  const [strength, setStrength] = useState("")

  useEffect(() => {
    setStrength(cliftonStrengths[0])
  }, [])

  useEffect(() => {
    let timeoutId = setTimeout(() => {
      if(index === 5){
        console.log("index equal 4" )
        setStrength(cliftonStrengths[0])
        index = 1
      } else {
        setStrength(cliftonStrengths[index])
        index++
      }
      return () => clearTimeout(timeoutId)
    }, 5000)
    
  }, [strength])

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
            <div style={{fontSize: '25px'}}>Alexander Leino</div>
            <div style={{fontSize: '20px'}}>
              Full Stack MERN Developer | {strength}
            </div>
          </Col>

          <Col></Col>
        </Row>
      </Container>
    </>
  );
}

export default Header;
