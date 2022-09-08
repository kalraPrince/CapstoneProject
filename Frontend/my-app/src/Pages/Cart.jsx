import React, { Fragment, useEffect, useState } from 'react';
import Helmet from 'react-helmet';
import axios from 'axios';
import '../Styles/Cart.css';
import cartGif from '../assets/images/icons8-shopping-cart.gif';
import backGif from '../assets/images/icons8-back.gif';
import trashGif from '../assets/images/icons8-trash.gif'

const Cart = () => {
    const [results, setResults] = useState([]);
    useEffect(() => {
        const loadProducts = async () => {
            await axios.get(`http://localhost:3003/products`)
                .then(response => {
                    console.log(`response`, response.data)
                    setResults(response.data);
                }
            )        
            .catch(err=>console.log(`err`, err))
        }
        loadProducts();
    }, []);
  return (
    <Fragment>
          <div>
              <Helmet><title>Shopping Cart</title></Helmet>
              <header>
                  <div className='continue-shopping'>
                    <img src={backGif} alt='left-arrow' className='arrow-icon'/>
                     <h3>Continue Shopping</h3> 
                  </div>
                    
                  <div className='cart-icon'>
                      <img src={cartGif} alt="cart-gif" />
                  </div>
              </header> 
              
              <section className="main-cart-section">
                  <h1 className='heading'>Shopping Cart</h1>
                  <p className="total-items">You have <span className="total-items-count">21</span> items in shopping cart</p>

                  <div className='cart-items'>
                      <div className='cart-items-container'>
                          {
                              results.map(item => ( 
                           <div key={item.id} className="row-hover">     
                            <div  className='items-info'>
                              <div className="product-img">
                                  <img src={item.images} alt={item.id} />
                              </div>

                              <div>
                                <h2 className='title'>{item.title}</h2>
                                {/* <h4>{ item.description}</h4>              */}
                              </div>

                              <div className='add-minus-quantity'>
                                  <i className='fa fa-plus plus'></i>
                                  <input type="text" placeholder='3' disabled/>
                                  <i className='fa fa-minus minus'/>
                              </div>

                              <div className='price'>
                                 <h3> ${item.price}</h3>
                              </div>

                              <div className='remove-item'>
                                <img src={trashGif} alt="trash-gif" className='trashGif btn'/>
                              </div>
                                    
                            </div>  
                            <hr/>
                        </div>  
                    ))       
                    }  
                        
                    </div>
                  </div>
                  
                  <div className="card-total mb-5">
                    <h3>Cart Total : <span>totalamt₹</span></h3>
                    <button>Proceed to Checkout</button>
                    <button className="clear-cart" >Clear Cart</button>
                 </div>
            </section>
        </div>
    </Fragment>
  )
}

export default Cart
