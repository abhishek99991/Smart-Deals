import React, { useEffect, useState } from 'react';
import './cart.css';
import Header from '../../ReusableComp/Header';
import Footer from '../../ReusableComp/footer';
import { FaArrowRight } from 'react-icons/fa';
import { cartListApi, cartQuantityManager } from '../../store/services/products';

interface Product {
    image: string;
    brand: string;
    model: string;
    description: string;
    price: number;
    id: string;
}

interface CartItemType {
    product: Product;
    quantity: number;
}

interface CartItemProps {
    item: CartItemType;
    onRemove: (productId: string) => void;
}

const CartItem: React.FC<CartItemProps> = ({ item, onRemove }) => {
    const [cartValue, setCartValue] = useState(item?.quantity || 1);
    const cartQuantity = (quantity: any) => {
        cartQuantityManager({
            body: {
                product_id: item?.product?.id,
                quantity
            }
        })?.then((res: any) => {
            console.log('res', res)
        })?.catch((err: any) => console.log('err', err))
    }

    const decreaseCount = () => {
        if (cartValue > 1) {
            setCartValue(cartValue - 1);
            cartQuantity(cartValue - 1);
        }
    };

    const increaseCount = () => {
        setCartValue(cartValue + 1);
        cartQuantity(cartValue + 1);
    };

    return (
        <div className="flex space-bw shopping-beg-top">
            <div className="col-25 shopping-cart-img"><img src={item?.product?.image} alt={item?.product?.description} /></div>
            <div className="col-25 shopping-jbl-product">
                <div>{item?.product?.brand}</div>
                <div>{item?.product?.model}</div>
                <div>{item?.product?.description}</div>
            </div>
            <div className="col-25 shopping-jbl-product">
                <div>{item?.product?.price} AED</div>
            </div>
            <div className="col-25 text-center ">
                <div className="flex align-center cart-plus-minus-head">
                    <div className='cart-minus' onClick={decreaseCount}>-</div>
                    <div className='cart-val'>{cartValue}</div>
                    <div className='cart-plus' onClick={increaseCount}>+</div>
                </div>
                <div className='cart-remove'><button onClick={() => onRemove(item.product.id)}>Remove</button></div>
            </div>
        </div>
    );
};


const Cart = () => {
    const [cartItems, setCartItems]: any = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const cartListDataApiResponse = async () => {
        setLoading(true);
        try {
            const res: any = await cartListApi();
            setCartItems(res?.items || []);
        } catch (err: any) {
            console.error('Error fetching cart data:', err);
            setError('Failed to load cart. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        cartListDataApiResponse();
    }, []);

    const handleRemove = (productId: string) => {
      setCartItems((prevItems: any) => prevItems.filter((item: any) => item.product.id !== productId));
      console.log(`Removing product with ID: ${productId}`);
    };

    const subtotal = cartItems.reduce((acc : any, item: any) => acc + (item?.product?.price * item?.quantity), 0);
    const delivery = 51.00;
    const total = subtotal + delivery;


    if (loading) {
        return (
            <div>
                <Header />
                <div className="container">Loading cart...</div>
                <Footer />
            </div>
        );
    }

    if (error) {
        return (
            <div>
                <Header />
                <div className="container">Error: {error}</div>
                <Footer />
            </div>
        );
    }

    return (
        <div>
            <Header />
            <div className="container">
                <h2 className='shopping-bag'>Shopping Bag</h2>
                <div className="flex space-bw">
                    <div className="col-70 ">
                        {cartItems?.map((item: CartItemType) => (
                            <CartItem
                                key={item?.product?.id}
                                item={item}
                                onRemove={handleRemove}
                            />
                        ))}
                    </div>
                    <div className="col-30">
                        <div className="flex align-center apply-coupan">
                            <div className='brown'>Apply Coupon</div>
                            <FaArrowRight size={18} className='brown' />
                        </div>
                        <div className='cart-input-top'>
                            <input type="text" />
                            <div className='cart-input-arrrow'><FaArrowRight size={18} className='white' /></div>
                        </div>
                        <div className='cart-order'>Order Summary</div>
                        <div className="flex align-center space-bw order-subtotal">
                            <div>Subtotal</div>
                            <div>{subtotal.toFixed(2)} AED</div>
                        </div>
                        <div className="flex align-center space-bw order-subtotal-mid">
                            <div>Delivery</div>
                            <div>{delivery.toFixed(2)} AED</div>
                        </div>
                        <div className="flex align-center space-bw order-subtotal order-total">
                            <div>Total</div>
                            <div>{total.toFixed(2)} AED</div>
                        </div>
                        <div className='cart-go-to'><button>Go to Checkout</button></div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Cart;