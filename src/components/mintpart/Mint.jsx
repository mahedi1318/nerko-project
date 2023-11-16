import React, { useEffect, useState } from 'react'
import "../../assets/styles/mint.css"
import { Col, Container, Row } from 'react-bootstrap'
import { MintData } from '../../middleware/Api'

const Mint = () => {

    let [mint, setMint] = useState([])

    useEffect(()=>{
        setMint(MintData)
    },[])

  return (
    <div className='mint_part'>
        <Container>
            <div className="main_title">
                <h3 className='main_title_h3'>How to mint</h3>
            </div>
           <div className='maint_details'>
            <Row>
                {mint.map((item, index)=>(
                    <Col lg={6}>
                    <div className="maint_item">
                        <div className="maint_main">
                            <div className="maint_left">
                                <img className='maint_img' src={item.mintImg} alt="" />
                            </div>
                            <div className="maint_right">
                                <h2 className='mint_h2'>{item.titleName}</h2>
                                <p className='mint_p'>{item.pera}</p>
                            </div>
                        </div>
                    </div>
                </Col>
                ))}
            </Row>
           </div>
        </Container>
    </div>
  )
}

export default Mint