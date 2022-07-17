import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import Particle from '../Particle'
import Resumecontent from './ResumeContent'
import pdf from '../../Assets/Aridona-Krasniqi.pdf'
import {AiOutlineDownload} from 'react-icons/ai'

function Resume() {
  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row style={{justifyContent: 'center', position: 'relative'}}>
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Experience</h3>
            <Resumecontent
              title="Social Media at Dardania Sport"
              date="01/01/2019 "
              content={[
                
              'My job includes tasks like preparing monthly sales reports, helping customers making orders, preparing the orders (packing), managing the social media account and the webpage, etc. '
              ]}
            />
            <Resumecontent
              title="Social Media at Dardania Sport"
              date="June 2020 "
              content={[
                'Shoqata Esnaf',
              
              ]}
            />
           
            
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="Computer Science and Engineering "
              date="2017 - 2021 at University of Prizren Ukshin Hoti"
              content={[
                
              ]}
            />

            <h3 className="resume-title">Language Skills</h3>
            <Resumecontent
              title=""
              content={[
                `English`,
                `Albania`,
              ]}
            />
          </Col>
        </Row>
        <Row style={{justifyContent: 'center', position: 'relative'}}>
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </Container>
  )
}

export default Resume
