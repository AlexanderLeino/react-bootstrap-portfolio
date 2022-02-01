import React, {useEffect, useState} from 'react';
import { Container, ButtonGroup, Button, Image, Row, Col } from 'react-bootstrap'

import ButtonContainerCss from '../components/ButtonContainer.css'
import { projectsArray } from '../projectsData/projectData';

function ButtonContainer() {
    let newArray = []
    const [filteredOptions, setFilteredOptions] = useState('all')
    const [filteredProjects, setFiliteredProjects] = useState(projectsArray)

    

    useEffect(() => {
        filteredProjects.map(project => {
            if(project.tags.includes(filteredOptions)){
                newArray.push(project)
            } else{
               return
            }
            setFiliteredProjects(newArray)
        })

    },[filteredOptions])

    
    const handleChange = (target) => {
        setFilteredOptions(target.target.value)
        setFiliteredProjects(projectsArray)
    }
    
    return (<>
    <Container className='mt-5 buttonContainer' size='sm'>
        
            <Button style={{fontWeight: '600', borderRadius:'25px'}} className='button button1' value='all' onClick={handleChange} bsPrefix="btn" >All</Button>
            <Button style={{fontWeight: '600', borderRadius:'25px'}} className='button button2' value='fullStack' onClick={handleChange}>Full Stack</Button>
            <Button style={{fontWeight: '600', borderRadius:'25px'}} className='button button3' value='frontEnd' onClick={handleChange}>Front End</Button>
        
    </Container>
    <Container className=' mt-5' fluid='sm'>
        <Row>
            {filteredProjects.map(project => {
              return <>
              <Container as='div'style={{display:'flex', flexDirection:'column', justifyContent:'space-evenly'}}>
            <Row className='project-wrapper'>
                
                <Container as='div' className='text-container' style={{display:'flex', maxWidth:'fit-content', borderRadius:'25px', marginBottom:'30px'}}>
                    <Row className="center" style={{display:'flex', justifyContent:'center', alignContent:'center', marginBottom:'20px', textAlign:'center'}}>
              <h2 style={{textAlign:'center', fontWeight:'600', fontSize:'35px', marginTop:'10px'}}>{project.title}</h2>

              
                        <Col lg={6} md={12} sm={12} xs={12}>
                            <Image style={{height:'100%', maxWidth:'600px', borderRadius:'25px', padding:'10px', overflow:'hidden', width:'100%'}} src={project.image}/>
                        </Col>
                        <Col lg={6}>
                            <h2 style={{textAlign:'center', fontWeight:'600'}}>Description</h2>
                            <div>{project.description}</div>
                            <h5 style={{fontWeight:'600', marginTop:'10px'}}>Built With: </h5>
                            <Container as='div' style={{display:'flex', justifyContent:'space-evenly', flexWrap:'wrap'}}>
                            {project.icons.map((icon, index) => {
                               
                                return <div style={{fontSize:'35px', marginBottom:'20px'}}>{icon}</div>
                            })}
                            
                            </Container>
                            <Container as='div' style={{display:'flex', justifyContent:'space-around'}}>
                            <a href={project.deploy} target='_blank'><Button style={{fontWeight: '600', backgroundColor:'white',  color:'black', borderRadius:'25px', marginBottom:'15px'}} className='button'>Deploy App</Button></a>
                            <a href={project.code} target='_blank'><Button style={{fontWeight: '600', backgroundColor:'white',  color:'black', borderRadius:'25px', marginBottom:'15px'}} className='button'>Source Code</Button></a>
                            </Container>
                        </Col>
                    </Row>
                </Container>
                </Row>  
              </Container>
              </>
            })}
        </Row>
    </Container>
  
  
    </>
    );
  
    
}

export default ButtonContainer;
