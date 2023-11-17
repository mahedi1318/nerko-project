import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import BannerText from './BannerText'
import BannerImg from './BannerImg'
import "../../assets/styles/banner.css"

const Banner = () => {
  return (
    <div className='banner_part'>
        <Container>
            <Row>
                <Col>
                    <BannerText/>
                </Col>
                <Col>
                    <BannerImg/>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Banner