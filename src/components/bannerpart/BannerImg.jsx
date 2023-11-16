import React from 'react'
import { Col, Row } from 'react-bootstrap'
import BannerImg1 from "../../assets/images/img-1.jpg"
import BannerImg2 from "../../assets/images/img-2.jpg"

const BannerImg = () => {
  return (
    <div>
        <Row>
            <Col lg={6}>
                <div className="bannerimg_item">
                    <div className="img_banner">
                        <img src={BannerImg1} alt="" />
                    </div>
                </div>
            </Col>
            <Col lg={6}>
                <div className="bannerimg_item">
                    <div className="img_banner img_two">
                        <img src={BannerImg2} alt="" />
                    </div>
                </div>
            </Col>
        </Row>
    </div>
  )
}

export default BannerImg