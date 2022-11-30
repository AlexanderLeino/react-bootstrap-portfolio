import React from 'react';
import { Container, Col, Row } from 'react-bootstrap'
import { ImTwitter } from 'react-icons/im'
import { SiHashnode, SiGithub } from 'react-icons/si'
import { FiMail } from 'react-icons/fi'
import FooterCss from './Footer.css'
function Footer() {
  return(<>
    <Container className='mt-5'>
        <div style={{textAlign:'center', fontSize:'25px'}}>Lets Connect</div>
        <div className='footer'>
            <a  target='_blank' className='navItem' href='https://twitter.com/AlexDotDev'><ImTwitter className='icon'/></a>
                <a className='navItem' target='_blank' href='https://hashnode.com/@Aleino'><SiHashnode className='icon'/></a>
                <a className='navItem' target='_blank' href='mailto:Alexander.Leino@yahoo.com'><FiMail className='icon' style={{textAlign:'center'}}/></a>  
                <a className='navItem' target='_blank' href='https://github.com/AlexanderLeino?tab=repositories'><SiGithub className='icon' style={{textAlign:'center'}}/></a>      
        </div>
    </Container>
  </>

  )
}

export default Footer;
