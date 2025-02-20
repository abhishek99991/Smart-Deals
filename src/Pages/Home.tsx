import React, { useState, useEffect } from "react";
import Navbar from "../ReusableComp/Header";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import banner_img from "../assets/banner-img.png"; 
import BestSeller from "../ReusableComp/BestSeller";
import shopBrand from "../assets/shop-brand.png"
import offerWeekImage from "../assets/offers-week.png"
import newArrival from "../assets/new-arrival.png"
import newArrivalHalf from "../assets/new-arrival-half.png"
import Footer from "../ReusableComp/footer"
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import ShopBrand1 from "../assets/shop-brand1.png"
import ShopBrand2 from "../assets/shop-brand2.png"
import ShopBrand3 from "../assets/shop-brand3.png"
import ShopBrand4 from "../assets/shop-brand4.png"
import ShopBrand5 from "../assets/shop-brand5.png"
import ShopBrand6 from "../assets/shop-brand6.png"
import ShopBrand7 from "../assets/shop-brand7.png"
import SliderSection from "../ReusableComp/sliderSection";
import { getCategories } from "../store/services/Auth";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [categories, setCategories]:any = useState([]);
  const navigate: any = useNavigate();
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
          top:"200px"
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
          zIndex: 1,
          cursor: "pointer",
          backgroundColor:"efefef",
          borderRadius:"10px",
          top:"200px"

        }}
        onClick={onClick}
      />
    );
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
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
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  useEffect(() => {
    getCategories()
    .then((res:any) =>{
      setCategories(res)
    }).catch((err) => console.log('err', err))
  }, [])


  const clickParticularItem = (cat_id: any) => {
    navigate("/shop");
  }

  return (
    <div>
      <Navbar />
        <div className='container slider-head'>
        <Slider {...settings}>
        {categories?.map((item: any) => (
          <div className="slide-top" key={item.id} onClick={() => clickParticularItem(item.id)}>
            <div className="slide">
              <img src={item.category_image} />
            </div>
            <p>{item.name}</p>
          </div>
        ))}

         
        </Slider>
        </div>

         <div className="container">
              <div className="flex space-bw banner-head">
                  <div className="col-40 banner-text">
                    <h1>Your one stop <br />
                    for the best <br /> Products</h1>
                    <div className="flex align-center banner-btn">
                      <button className="exp-products">Explore Products</button>
                      <button className="get-started">Get Started</button>
                    </div>
                  </div>
                  <div className="col-60 banner-img"><img src={banner_img} alt="" /></div>
                  
              </div>
         </div>

      <BestSeller />

      <SliderSection/>
      <SliderSection/>
      
      <div className="container">
        <h2 className="shop-brand text-center">Shop by Brand</h2>
        <div className="flex align-center space-bw shop-brand-inner">
          <div className="col-25"><img src={shopBrand} alt="" /></div>
          <div className="col-25"><img src={ShopBrand1} alt="" /></div>
          <div className="col-25"><img src={ShopBrand2} alt="" /></div>
          <div className="col-25"><img src={ShopBrand3} alt="" /></div>
        </div>
        <div className="flex align-center space-bw shop-brand-inner">
          <div className="col-25"><img src={ShopBrand4} alt="" /></div>
          <div className="col-25"><img src={ShopBrand5} alt="" /></div>
          <div className="col-25"><img src={ShopBrand6} alt="" /></div>
          <div className="col-25"><img src={ShopBrand7} alt="" /></div>
        </div>
      </div>


      <div className="container">
         <h2 className="shop-brand text-center">Offers of the Week</h2>
            <div className="flex align-center space-bw offer-week-head">
              <div className="col-33"><img src={offerWeekImage} alt="" /></div>
              <div className="col-33"><img src={offerWeekImage} alt="" /></div>
              <div className="col-33"><img src={offerWeekImage} alt="" /></div>
            </div>
            <div className="flex align-center space-bw offer-week-head">
               <div className="col-33"><img src={offerWeekImage} alt="" /></div>
              <div className="col-33"><img src={offerWeekImage} alt="" /></div>
              <div className="col-33"><img src={offerWeekImage} alt="" /></div>
            </div>
      </div>

      <div className="container">
      <h2 className="shop-brand text-center">New Arrivals</h2>
        <div className="flex align-center space-bw new-arrival-head">
                <div className="col-33"><img src={newArrival} alt="" /></div>
                <div className="col-33">
                    <div className="half-arrival"><img src={newArrivalHalf} alt="" /></div>
                    <div className="half-arrival"><img src={newArrivalHalf} alt="" /></div>
                </div>
                <div className="col-33"><img src={newArrival} alt="" /></div>
        </div>
      </div>

      <Footer />

    </div>
  )
}

export default Home