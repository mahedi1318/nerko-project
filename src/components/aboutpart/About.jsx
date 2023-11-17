import React from 'react'
import AboutIng from './AboutIng'
import { Col, Container, Row } from 'react-bootstrap'
import AboutText from './AboutText'
import "../../assets/styles/about.css"
import "../../assets/styles/responsive.css"

const About = () => {
  return (
    <div className='about_part'>
        <Container>
            <div className="about_title">
                <h3 className='about_h3'>About the platform</h3>
            </div>
            <Row>
                <Col lg={6}>
                    <AboutIng/>
                </Col>
                <Col lg={6}>
                    <AboutText/>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default About