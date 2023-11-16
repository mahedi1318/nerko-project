import React from 'react'

const AboutText = () => {
  return (
    <div>
        <span className='about_span'>CREATE AND INVEST</span>
        <h2 className='about_h2'>Create your own NFT</h2>
        <p className='about_p'>Multiple Chains, One Home. Stack up all your NFTs from across blockchains.</p>
        <div className="about_main">
          <div className="about_item">
            <h3 className='about_item_h3'>4,500+</h3>
            <p className='about_text_p'>Collections Indexed
                every 5mins.</p>
          </div>
          <div className="about_item">
            <h3 className='about_item_h3'>2.5x</h3>
            <p className='about_text_p'>Difference in Floor & Estimated NFT Value</p>
          </div>
        </div>
    </div>
  )
}

export default AboutText