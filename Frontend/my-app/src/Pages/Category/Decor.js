import React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ProductFetch } from '../../Store/ProductSlice';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import { addToCart } from "../../Store/CartSlice";
import '../../Styles/product.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { addToWish } from '../../Store/WishListSlice';
import { RiHeart3Fill } from 'react-icons/ri';

const Decor = () => {
    const { items } = useSelector((state) => state.product);
    const [value, setValue] = React.useState(4);
    const [sortvalue,setSortvalue]=React.useState('')
    const sortoption=['title','price']
    const dispatch = useDispatch();
    const protext=""
    const sort = "rating"
    
    useEffect(() => {
        dispatch(ProductFetch(protext,value));
    }, []);

    const handleAddWishlist = (item) => {
        dispatch(addToWish(item));
    };

    const handleAddToCart = (item) => {
        dispatch(addToCart(item));

    };
// const sorting="price"
//     const handleSort= async(e)=>{
//         let value=e.target.value
//         setSortvalue(value)
//         dispatch(ProductFetch(value))
//     }

    const DecorProducts = items.filter((product) => product.category === 'decor');

    return (
        <div>
            <h2 className='category'>Decor Items</h2>

            {/* <div>
                <select onChange={(e)=>handleSort(e)} value={sortvalue}>
                    <option>Please select value</option>
                    {
                        sortoption.map((item,index)=>(
                            <option value={item}>{item}</option>
                            
                        ))
                    }
                </select>
            </div> */}
          
            <div className='container'>
                {
                    DecorProducts.map((item) => (
                        <div className="card-item">
                            <div className="card-inner">
                                <div className="card-top">
                                    <img className="card-img" src={item.images} />
                                    <button onClick={() => handleAddToCart(item, window.location.reload())} className="cart-btn">
                                        <svg className="cart-button" xmlns="http://www.w3.org/2000/svg" width="15" height="20" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z" />
                                        </svg></button>
                                </div>
                                <div className="card-bottom">
                                    <div className="card-info">
                                        <p className="title">{item.title}</p>
                                        <Box component="fieldset" mb={3} borderColor="transparent">
                                            <Typography component="legend"></Typography>
                                            <Rating
                                                name="simple-controlled"
                                                value={value}
                                                onChange={(event, newValue) => {
                                                    setValue(newValue);
                                                }} />
                                        </Box>
                                        {/* <p className='fieldsets'>{data.rating} ★</p> */}
                                        <p className="price">₹{item.price}</p>
                                        <p className='offer'>{item.discountPercentage}% OFF</p>
                                        {/* <p>{data.rating} ★</p> */}
                                        <RiHeart3Fill onClick={()=>handleAddWishlist(item)}></RiHeart3Fill>
                                        <Link to={`/SingleProduct/${item._id}`}>Details</Link>

                                    </div>
                                </div>
                            </div>
                        </div>

                    ))
                }
            </div>
        </div>

    )
}

export default Decor