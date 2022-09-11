import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart, increaseCart, decreaseCart, clearCart, cartTotal,getCompleteCart, getCart} from "../../Store/CartSlice";
import { Link } from "react-router-dom";
import '../../Styles/Cart.css';

const Cart = () => {
    const cart = useSelector(getCart);
    const { cartTotalQuantity } = useSelector((state) => state.cart);
    const [stock,setStock]=useState('Instock')
    const [mystyle,setMystyle]=useState({textColor:"green",fontSize:"15px"})
    const subtotal=useSelector(getCompleteCart)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(cartTotal());
    }, [subtotal]);

    const handleAddToCart = (product) => {
        dispatch(addToCart(product)); 
    };
    const handleDecreaseCart = (product) => {
        dispatch(decreaseCart(product));
    };
    const handleRemoveFromCart = (product) => {
        dispatch(removeFromCart(product));
    };
    const handleClearCart = () => {
        dispatch(clearCart());
    };
     const toggle=(()=>{
        if(cart.stock>10)
        {
            setStock('instock')
            setMystyle({textColor:"red"})
        }
        else{
            setStock('Instock')
            setMystyle({background:"green"})
        }
     })
    
    return (
        <div className="carting-container">
            <h2>Shopping Cart ({cartTotalQuantity} items)</h2>
            {cart.length === 0 ? (
                <div className="carting-empty">
                    <p>Your cart is currently empty</p>
                    <div className="carting-start-shopping">
                        <Link to="/product">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                fill="currentColor"
                                className="bi bi-arrow-left"
                                viewBox="0 0 16 16"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                                />
                            </svg>
                            <span>Start Shopping</span>
                        </Link>
                    </div>
                </div>
            ) : (
                <div>
                    <div className="carting-titles">
                        <h3 className="carting-product-title">Product</h3>
                        <h3 className="carting-price">Price</h3>
                        <h3 className="carting-quantity">Quantity</h3>
                        <h3 className="carting-total">Total</h3>
                    </div>
                    <div className="carting-items">
                        {cart &&
                            cart.map((cartItem) => (
                                <div className="carting-item" key={cartItem.id}>
                                    <div className="carting-product">
                                        <img src={cartItem.images} alt={cartItem.title} />
                                        <div>
                                            <h3>{cartItem.title}</h3>
                                            <p>{cartItem.description}</p>
                                            <p>
                                           <span>Available :</span>
                                           {cartItem.stock> 0 ?'In stock':'Out of stock'}
                                           </p>
                                            <button onClick={() => handleRemoveFromCart(cartItem)}>
                                                Remove
                                            </button>
                                        </div>
                                    </div>
                                    <div className="carting-product-price">₹{cartItem.price}</div>
                                    <div className="carting-product-quantity">
                                        <button onClick={() => handleDecreaseCart(cartItem)}>
                                            -
                                        </button>
                                        <div className="carting-count">{cartItem.cartQuantity}</div>
                                        <button onClick={() => handleAddToCart(cartItem)}>+</button>
                                    </div>
                                    <div className="carting-product-total-price">
                                    ₹{cartItem.price * cartItem.cartQuantity}
                                    </div>
                                </div>
                            ))}
                    </div>
                    <div className="carting-summary">
                        <button className="carting-clear-btn" onClick={() => handleClearCart()}>
                            Clear Cart
                        </button>
                        <div className="carting-checkout">
                            <div className="carting-subtotal">
                                <span>Subtotal</span>
                                <span className="carting-amount">₹{subtotal.cartTotalAmount}</span>
                            </div>
                            <p>Taxes and shipping calculated at checkout</p>
                            <button>Check out</button>
                            <div className="carting-continue-shopping">
                                <Link to="/product">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20"
                                        height="20"
                                        fill="currentColor"
                                        className="bi bi-arrow-left"
                                        viewBox="0 0 16 16"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                                        />
                                    </svg>
                                    <span>Continue Shopping</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cart;