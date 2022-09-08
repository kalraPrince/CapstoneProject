import * as React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ProductFetch } from '../../Store/productSlice';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import '../../Styles/product.css'

const Garden = () => {
    const { items } = useSelector((state) => state.product);
    const [value, setValue] = React.useState(4);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(ProductFetch());
    }, []);

    const GardenProducts = items.filter((product) => product.category === 'plant');

    return (
        <div>
            <h2 className='category'>Planter</h2>
            <div className='container'>
                {
                    GardenProducts.map((item) => (
                        <div className="card-item">
                            <div className="card-inner">
                                <div className="card-top">
                                    <img className="card-img" src={item.images} />
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

export default Garden