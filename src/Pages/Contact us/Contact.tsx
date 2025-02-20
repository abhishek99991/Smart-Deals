import React from 'react'
import Header from '../../ReusableComp/Header'
import Footer from '../../ReusableComp/footer'
import './contact-us.css'
import conactImage from '../../assets/contact-main-img.png'
import { IoCallOutline } from "react-icons/io5";
import { CiShop } from "react-icons/ci";
import { CiDeliveryTruck } from "react-icons/ci";
import { GiScrew } from "react-icons/gi";



const Contact = () => {
  return (
    <div>
      <Header/>
        <div className="container">
          <div className='contact-main-img'><img src={conactImage} alt="" /></div>

          <div className="flex space-bw container">
              <div className="col-30">
                <div className='we-help'>We’re here to help</div>
                  <div className="flex align-center space-bw contact-icons">
                  <div className="col-50 text-center">
                     <IoCallOutline className='grey' size={25}/>
                      <p>Call US</p>
                      <a>800 958 6254</a>
                  </div>
                  <div className="col-50 text-center">
                    <CiShop className='grey' size={25}/>
                    <p>Visit Us</p>
                    <a>Find a Store</a>
                  </div>
                  <div className="col-50 text-center">
                     <CiDeliveryTruck className='grey' size={25}/>
                     <p>Delivery Options</p>
                     <a>Learn more</a>
                  </div>
                  <div className="col-50 text-center">
                     <GiScrew className='grey' size={25}/>
                     <p>Service & Warranty</p>
                     <a>Learn More</a>
                  </div>
                  </div>
              </div>
              <div className="col-70 contact-form-top">
                  <h3 className='contact-form'>Contact Form</h3>
                  <p className='contact-form-para'>We are always happy to help here at Jumbo. Drop us a line using the form below for all your queries.</p>

                  <div className='col-60 full-name-head'>
                      <div className='full-name'>Full Name</div>
                      <input type="text" placeholder='Enter Full Name'/>
                  </div>

                  <div className='col-60 full-name-head'>
                      <div className='full-name'>What can we help you with ?</div>
                      <input type="text" placeholder='General'/>
                  </div>

                  <div className='col-60 full-name-head'>
                      <div className='full-name'>Email</div>
                      <input type="email" placeholder='Enter Email Here'/>
                  </div>

                     <div className='col-60 full-name-head'>
                                 <div className='full-name'>
                                  Mobile No.
                                 </div>
                                <div className="flex align-center space-bw mobile-head">
                                    <div className='col-20'><input type="text" placeholder='+971'/></div>
                                    <div className='col-80'><input type="email" placeholder='Enter Mobile No. Here'/></div>
                                </div>
                          </div>

                          <div className='col-60 full-name-head'>
                              <div className='full-name'>Email</div>
                             <textarea name="" id="" placeholder='Enter Comments Here'></textarea>
                          </div>

                          <button className='contact-submit col-20'>
                            Submit
                          </button>

               </div>


          </div>
        </div>
      <Footer/>
    </div>
  )
}

export default Contact