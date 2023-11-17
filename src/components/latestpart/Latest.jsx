import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "../../assets/styles/latest.css"
import { LatestData } from '../../middleware/Api'
import "../../assets/styles/responsive.css"

const Latest = () => {

    let [latest, setLatest] = useState ([])

    useEffect(()=>{
        setLatest(LatestData)
    },[])

  return (
    <div className='latest_part'>        
        <Container>
            <div className="latest_title">
                <h3 className='latest_h3'>Latest artworks</h3>
            </div>
            <Row className='latest_item_list'>
                {latest.map((item, index)=>(
                <Col lg={3} key={index}>
                    <div className="latest_item">
                        <img className='latest_img' src={item.mintImg} alt="" />
                        <h4 className='latest_h4'>{item.titleName}</h4>
                        <span className='latest_span'>{item.span}</span>
                    </div>
                </Col>
                ))}
                
            </Row>
        </Container>
    </div>
  )
}

export default Latest