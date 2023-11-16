import React from 'react'
import "../../assets/styles/footer.css"
import { Col, Container, Row } from 'react-bootstrap'
import FooterLogo from "../../assets/images/footer-logo.png"
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithubAlt } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='footer_part'>
        <Container>
            <img src={FooterLogo} alt="" />
            <p className='footer_p'>We make it easy to Discover, Invest and manage all your NFTs at one place.</p>
            <Link className='footer_icon' to="/"><FaTwitter /></Link>
            <Link className='footer_icon' to="/"><FaInstagram /></Link>
            <Link className='footer_icon' to="/"><FaGithubAlt /></Link>
            <Link className='footer_icon' to="/"><FaTelegramPlane /></Link>              
            <div className="copy_right">
                <Row>
                    <Col lg={6}>
                        <div className='copy_text '>
                            <p className='align-left'>© 2023 Nerko. All rights reserved.</p>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className='copy_text copy_one'>
                            <p>© 2023 Nerko. All rights reserved.</p>
                        </div>
                    </Col>
                </Row>
            </div>         
        </Container>        
    </div>
  )
}

export default Footer