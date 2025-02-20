import React from 'react'
import image1 from '../assets/best-seller-game.png'
import { FaStar } from "react-icons/fa";


const BestSeller = () => {
  return (
    <div className='container'>
      <h2 className='text-center best-seller'>Best Sellers</h2>
      <div className="flex align-items space-bw">
          <div className="col-25 seller-top">
            <div className='seller-img1'><img src={image1} alt="" /></div>
            <p className='seller-text'>Sony DualSense Wireless Controller White (PlayStation 5)</p>
            <p className='sell-sony'>Sony</p>
            <FaStar color='#DE7921'/>
            <p className='sell-sony'>$235.22</p>
            <p className='sell-sony'>MRP: $999.99</p>
          </div>
          <div className="col-25 seller-top">
            <div className='seller-img1'><img src={image1} alt="" /></div>
            <p className='seller-text'>Sony DualSense Wireless Controller White (PlayStation 5)</p>
            <p className='sell-sony'>Sony</p>
            <FaStar color='#DE7921'/>
            <p className='sell-sony'>$235.22</p>
            <p className='sell-sony'>MRP: $999.99</p>
          </div>
          <div className="col-25 seller-top">
            <div className='seller-img1'><img src={image1} alt="" /></div>
            <p className='seller-text'>Sony DualSense Wireless Controller White (PlayStation 5)</p>
            <p className='sell-sony'>Sony</p>
            <FaStar color='#DE7921'/>
            <p className='sell-sony'>$235.22</p>
            <p className='sell-sony'>MRP: $999.99</p>
          </div>
          <div className="col-25 seller-top">
            <div className='seller-img1'><img src={image1} alt="" /></div>
            <p className='seller-text'>Sony DualSense Wireless Controller White (PlayStation 5)</p>
            <p className='sell-sony'>Sony</p>
            <FaStar color='#DE7921'/>
            <p className='sell-sony'>$235.22</p>
            <p className='sell-sony'>MRP: $999.99</p>
          </div>
      </div>
    </div>
  )
}

export default BestSeller