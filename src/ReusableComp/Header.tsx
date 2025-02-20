import React, { useState ,useEffect} from "react";
import logo from "../assets/logo.png";
import { IoSearchOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import OtpPopup from "../Pages/Pop ups/otpPopup";
import SignIn from "../Pages/Pop ups/SignIn";
import Register from "../Pages/Pop ups/Register";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"signin" | "register">("signin");
  const [isOtpPopupOpen, setIsOtpPopupOpen] = useState(false);
  const navigate=useNavigate()
  const token=localStorage.getItem("accessToken")
 
  const handleUserClick = () => {
    if (token) {
      navigate("/user");
    } else {
      setIsLoginOpen(true);
    }
  };
  const handleRegister = () => {
    setIsLoginOpen(false);
    setIsOtpPopupOpen(true);
    
  };
  const handleOtpSuccess = () => {
    setActiveTab("signin");
    setIsLoginOpen(true);
  };

  const cartClickHandler = () => {
    navigate("/cart");
  }

  return (
    <>
      <div className="nav-top">
        <div className="container flex align-center space-bw nav-head">
          <div className="flex align-center space-bw nav-items col-33">
            <Link to='/' className="text-gray-700 hover:text-black">Home</Link>
            <Link to='/shop' className="text-gray-700 hover:text-black">Shop</Link>
            <Link to='/about-us' className="text-gray-700 hover:text-black">About</Link>
            <Link to='/contact-us' className="text-gray-700 hover:text-black">Contact</Link>
          </div>
          <div className="ds-logo">
            <img src={logo} alt="" />
          </div>
          <div className="col-40 flex align-center icons-head">
            <div><IoSearchOutline className="icon" size={20} /></div>
            {localStorage.getItem("accessToken")?
              <div onClick={handleUserClick}><FaRegUser className="icon" size={20} /></div>
              :
              <p  onClick={handleUserClick}>Login</p>
            }

            {localStorage.getItem("accessToken") &&
            <div onClick={cartClickHandler}><IoCartOutline className="icon" size={20} /></div>
            }
          </div>
        </div>
      </div>

      {isLoginOpen &&     (
        <div className="login-popup-overlay" onClick={() => setIsLoginOpen(false)}>
          <div className="login-popup-box" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setIsLoginOpen(false)}>✖</button>
            <div className="login-tabs">
              <span className={`tab ${activeTab === "signin" ? "active" : ""}`} onClick={() => setActiveTab("signin")}>SIGN IN</span>
              <span className={`tab ${activeTab === "register" ? "active" : ""}`} onClick={() => setActiveTab("register")}>I'M NEW HERE</span>
            </div>

            {activeTab === "signin" ? <SignIn onSwitch={() => setActiveTab("register")} onClose={() => setIsLoginOpen(false)} /> : <Register onSwitch={() => setActiveTab("signin")} onRegister={handleRegister} onClose={() => setIsLoginOpen(false)}  />}
          </div>
        </div> 
      )}

      {isOtpPopupOpen && <OtpPopup onClose={() => setIsOtpPopupOpen(false)} onOtpSuccess={handleOtpSuccess} />}
    </>
  );
};

export default Header;
