import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import '../../Styles/product.css'

const ProductList = (props) => {

    const { data } = props;
    const [value, setValue] = React.useState(4);
    return (
        <div className="card-item">
            <div className="card-inner">
                <div className="card-top">
                    <img className="card-img" src={data.images} />
                </div>
                <div className="card-bottom">
                    <div className="card-info">
                        <p className="title">{data.title}</p>
                        <Box component="fieldset"  mb={3} borderColor="transparent">
                            <Typography component="legend"></Typography>
                            <Rating
                                name="simple-controlled"
                                value={value}
                                onChange={(event, newValue) => {
                                    setValue(newValue);
                                }}
                            />
                        </Box>
                         {/* <p className='fieldsets'>{data.rating} ★</p> */}
                        <p className="price">₹{data.price}</p>
                        <p className='offer'>{data.discountPercentage}% OFF</p>
                        {/* <p>{data.rating} ★</p> */}
                    </div>
                </div>
            </div>

        </div>


    );
}

export default ProductList;