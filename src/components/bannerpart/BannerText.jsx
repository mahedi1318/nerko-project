import React from 'react'
import { Link } from 'react-router-dom'

const BannerText = () => {
  return (
    <div>
        <h2 className='banner_h2'>Supercharge your NFT Adventure</h2>
        <p className='banner_p'>Find the right NFT collections to buy within the platform.</p>
        <Link className='benner_btn' to="/">View in OPENSEA</Link>
    </div>
  )
}

export default BannerText