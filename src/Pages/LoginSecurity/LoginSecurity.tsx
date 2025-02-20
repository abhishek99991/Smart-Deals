import React from 'react'
import './loginsecurity.css'
import Header from '../../ReusableComp/Header'
import Footer from '../../ReusableComp/footer'
const LoginSecurity = () => {
  return (
    <div>
      <Header/>
        <div className="container login-security-cont">
          <h2 className='login-heading'>Login & Security</h2>
          <div className='login-security-top'>
              <div className='flex align-center space-bw login-name-section'>
                  <div className='name-section'>
                    <div>Name</div>
                    <p>Sophia Grace Bennett</p>
                  </div>
                  <div className='edit-button'><button>Edit</button></div>
              </div>
              <div className='flex align-center space-bw login-name-section'>
                  <div className='name-section'>
                    <div>Email</div>
                    <p>customer@email.com</p>
                  </div>
                  <div className='edit-button'><button>Edit</button></div>
              </div>
              <div className='flex align-center space-bw login-name-section'>
                  <div className='name-section'>
                    <div>Phone Number</div>
                    <p>+971 589741263</p>
                  </div>
                  <div className='edit-button'><button>Edit</button></div>
              </div>
              <div className='flex align-center space-bw login-name-section'>
                  <div className='name-section'>
                    <div>Password</div>
                    <p>***************</p>
                  </div>
                  <div className='edit-button'><button>Edit</button></div>
              </div>
          </div>
        </div>
      <Footer/>
    </div>
  )
}

export default LoginSecurity