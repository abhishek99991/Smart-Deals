import React, { useEffect, useState } from 'react'
import './cart.css'
import Header from '../../ReusableComp/Header'
import Footer from '../../ReusableComp/footer'
import ProductSmallImg from '../../assets/product-small-img.png'
import { FaArrowRight } from "react-icons/fa";
import { cartListApi } from '../../store/services/products'



const Cart = () => {
  const [cartValue, setCartValue] = useState(1);
  const decreaseCount = () => {
    if (cartValue > 1) setCartValue(cartValue - 1);
  };

  const increaseCount = () => {
    setCartValue(cartValue + 1);
  };

  const cartListDataApiResponse = () => {
    cartListApi()?.then((res: any) => {
      console.log('res', res)
    })?.catch((err: any) => {
      console.log('err', err)
    })
  }

  useEffect(() => {
    cartListDataApiResponse();
  }, [])
  return (
    <div>
      <Header/>
      <div className="container">
        <h2 className='shopping-bag'>Shopping Bag</h2>
        <div className="flex space-bw">
            <div className="col-70 ">
                <div className="flex space-bw shopping-beg-top">
                    <div className="col-25 shopping-cart-img"><img src={ProductSmallImg} alt="" /></div>
                    <div className="col-25 shopping-jbl-product">
                        <div>JBL</div>
                        <div>JBL Bluetooth Speaker</div>
                        <div>Product ID:</div>
                    </div>
                    <div className="col-25 shopping-jbl-product">
                      <div>1999.00 AED</div>
                    </div>
                    <div className="col-25 text-center ">
                        <div className="flex align-center cart-plus-minus-head">
                          <div className='cart-minus' onClick={decreaseCount}>-</div>
                          <div className='cart-val'>{cartValue}</div>
                          <div className='cart-plus' onClick={increaseCount}>+</div>
                        </div>
                        <div className='cart-remove'><button>Remove</button></div>
                    </div>
                </div>
              
            </div>
            <div className="col-30">
                <div className="flex align-center apply-coupan">
                <div className='brown'>Apply Coupon</div>
                <FaArrowRight size={18} className='brown'/>
                </div>
                <div className='cart-input-top'>
                  <input type="text" />
                  <div className='cart-input-arrrow'><FaArrowRight size={18} className='white'/></div>
                </div>
                <div className='cart-order'>Order Summary</div>
                <div className="flex align-center space-bw order-subtotal">
                  <div>Subtotal</div>
                  <div>112451.00 AED</div>
                </div>
                <div className="flex align-center space-bw order-subtotal-mid">
                  <div>Delivery</div>
                  <div>51.00 AED</div>
                </div>
                <div className="flex align-center space-bw order-subtotal order-total">
                  <div>Total</div>
                  <div>112451.00 AED</div>
                </div>
                <div className='cart-go-to'><button>Go to Checkout</button></div>
            </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Cart