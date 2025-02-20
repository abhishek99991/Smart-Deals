import React from 'react'
import Header from '../../ReusableComp/Header'
import Footer from '../../ReusableComp/footer'
import './productdetails.css'
import ProductMainImg from '../../assets/product-main-img.png'
import { IoIosStar } from "react-icons/io";
import { IoIosStarHalf } from "react-icons/io";
import { IoIosStarOutline } from "react-icons/io";
import ProductSmallImg from '../../assets/product-small-img.png'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import phone_icon from "../../assets/ds-mob-icon.png";
import BestSeller from '../../ReusableComp/BestSeller'


const ProductDetails = () => {


const CustomPrevArrow = (props: any) => {
    const { className, style, onClick } = props;
    return (
      <MdOutlineKeyboardArrowLeft
        className={className}
        style={{
          ...style, 
          display: "block",
          color: "black",
          fontSize: "24px",
          position: "absolute",
          left: "45%",
          // bottom:"-60px",
          zIndex: 1,
          cursor: "pointer",
           backgroundColor:"efefef",
          borderRadius:"10px",
          top:"280px"
        }}
        onClick={onClick} // Fix: Add onClick handler
      />
    );
  };
  
  const CustomNextArrow = (props: any) => {
    const { className, style, onClick } = props;
    return (
      <MdKeyboardArrowRight
        className={className}
        style={{
          ...style,
          display: "block",
          color: "black",
          fontSize: "24px",
          position: "absolute",
          right: "45%",
          // bottom:"-60px",
          zIndex: 1,
          cursor: "pointer",
          backgroundColor:"efefef",
          borderRadius:"10px",
          top:"280px"

        }}
        onClick={onClick} // Fix: Add onClick handler
      />
    );
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: true, 
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <Header/>
      <div className="container">
       <div className="flex space-bw">
       <div className="col-40">
          <div className='product-main-img'>
            <img src={ProductMainImg} alt="" />
          </div>
        </div>
        <div className="col-60">
          <h3 className='jbl-bluetooth'>JBL Bluetooth Speaker</h3>
            <div className="flex">
                <IoIosStar size={20} className='brown'/>
                <IoIosStar size={20} className='brown'/>
                <IoIosStar size={20} className='brown'/>
                <IoIosStarHalf size={20} className='brown'/>
                <IoIosStarOutline size={20} className='brown'/>
            </div>
            <h2 className='jbl-price'>1499.00 AED</h2>
            <div className="flex align-center product-small-img">
              <div className='small-color'>Color:</div>
                <div className="flex align-center">
                      <div className='product-small-img-inner'>
                        <img src={ProductSmallImg} alt="" />
                      </div>
                      <div className='product-small-img-inner'>
                        <img src={ProductSmallImg} alt="" />
                      </div>
                      <div className='product-small-img-inner'>
                        <img src={ProductSmallImg} alt="" />
                      </div>
                      <div className='product-small-img-inner'>
                        <img src={ProductSmallImg} alt="" />
                      </div>
                </div>
                <div className="flex description-head">
                  <div className='description'>Description:</div>
                  <p className='col-80'>Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development to fill empty spaces </p>
                </div>
                <div className="flex description-head">
                  <div className='description'>Highlights:</div>
                  <div className='highlights-list'>
                    <ul>
                      <li>Lorem ipsum is a dummy or placeholder text </li>
                      <li>Lorem ipsum is a dummy or placeholder text </li>
                      <li>Lorem ipsum is a dummy or placeholder text </li>
                      <li>Lorem ipsum is a dummy or placeholder text </li>
                      <li>Lorem ipsum is a dummy or placeholder text </li>
                      </ul>
                  </div>
                </div>
            </div>
        </div>
       </div>
              <div className="flex align-center col-50">
                      <div className='product-small-img-btm'>
                        <img src={ProductSmallImg} alt="" />
                      </div>
                      <div className='product-small-img-btm'>
                        <img src={ProductSmallImg} alt="" />
                      </div>
                      <div className='product-small-img-btm'>
                        <img src={ProductSmallImg} alt="" />
                      </div>
                      <div className='product-small-img-btm'>
                        <img src={ProductSmallImg} alt="" />
                      </div>
                      <div className='product-small-img-btm'>
                        <img src={ProductSmallImg} alt="" />
                      </div>
                      <div className='product-small-img-btm'>
                        <img src={ProductSmallImg} alt="" />
                      </div>
                      <div className='product-small-img-btm'>
                        <img src={ProductSmallImg} alt="" />
                      </div>
                </div>

        <div className='specification-top'>
          <div className='specification-text'>Specifications</div>
           <div className='specific-textarea'> <textarea name="" id=""></textarea></div>
        </div>
      </div>


      <div className="container">
      <div className="flex">
        <div className="col-50">
        <h3 className="ratings-header">Ratings & Review</h3>
          <div className="ratings-content">
            <div className="ratings-summary">
              <div className="rating-score">
                <span className="score">4.6</span> ★
              </div>
              <div className="rating-info">5,442 Ratings & 227 Reviews</div>
            </div>

            <div className="ratings-breakdown">
              <div className="rating-bar">
                <span>5 ★</span>
                <div className="bar">
                  <div className="fill five-star"></div>
                </div>
                <span>4,347</span>
              </div>
              <div className="rating-bar">
                <span>4 ★</span>
                <div className="bar">
                  <div className="fill four-star"></div>
                </div>
                <span>584</span>
              </div>
              <div className="rating-bar">
                <span>3 ★</span>
                <div className="bar">
                  <div className="fill three-star"></div>
                </div>
                <span>164</span>
              </div>
              <div className="rating-bar">
                <span>2 ★</span>
                <div className="bar">
                  <div className="fill two-star"></div>
                </div>
                <span>74</span>
              </div>
              <div className="rating-bar">
                <span>1 ★</span>
                <div className="bar">
                  <div className="fill one-star"></div>
                </div>
                <span>273</span>
              </div>
            </div>
          </div>

        </div>
        <div className="col-50 text-right"><button className="rate-button">Rate The Product</button>
        </div>
      </div>
      </div>



      <div className='container slider-head'>
        <Slider {...settings}>
          <div className="product-cards-top">
              <div className='product-card-text'>Lorem ipsum</div>
              <div className="flex">
                <IoIosStar size={20} className='brown'/>
                <IoIosStar size={20} className='brown'/>
                <IoIosStar size={20} className='brown'/>
                <IoIosStarHalf size={20} className='brown'/>
                <IoIosStarOutline size={20} className='brown'/>
                 </div>
              <p className='product-card-para'>Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development to fill empty spaces </p>

              <div className="flex align-center product-card-img-top">
                <div><img src={ProductSmallImg} alt="" /></div>
                <div><img src={ProductSmallImg} alt="" /></div>
              </div>
              <p className='product-card-para'>Dubai </p>
              <p className='product-card-para'>22 days ago</p>
          </div>
          <div className="product-cards-top">
              <div className='product-card-text'>Lorem ipsum</div>
              <div className="flex">
                <IoIosStar size={20} className='brown'/>
                <IoIosStar size={20} className='brown'/>
                <IoIosStar size={20} className='brown'/>
                <IoIosStarHalf size={20} className='brown'/>
                <IoIosStarOutline size={20} className='brown'/>
                 </div>
              <p className='product-card-para'>Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development to fill empty spaces </p>

              <div className="flex align-center product-card-img-top">
                <div><img src={ProductSmallImg} alt="" /></div>
                <div><img src={ProductSmallImg} alt="" /></div>
              </div>
              <p className='product-card-para'>Dubai </p>
              <p className='product-card-para'>22 days ago</p>
          </div>
          <div className="product-cards-top">
              <div className='product-card-text'>Lorem ipsum</div>
              <div className="flex">
                <IoIosStar size={20} className='brown'/>
                <IoIosStar size={20} className='brown'/>
                <IoIosStar size={20} className='brown'/>
                <IoIosStarHalf size={20} className='brown'/>
                <IoIosStarOutline size={20} className='brown'/>
                 </div>
              <p className='product-card-para'>Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development to fill empty spaces </p>

              <div className="flex align-center product-card-img-top">
                <div><img src={ProductSmallImg} alt="" /></div>
                <div><img src={ProductSmallImg} alt="" /></div>
              </div>
              <p className='product-card-para'>Dubai </p>
              <p className='product-card-para'>22 days ago</p>
          </div>
        </Slider>
        </div>


        <BestSeller/>
        <BestSeller/>
      <Footer/>
    </div>
  )
}

export default ProductDetails