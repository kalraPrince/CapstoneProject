import '../Styles/UserProduct.css'
import {useSelector } from "react-redux";
import { Helmet } from 'react-helmet';

function UserProduct(){

    const {items,status}=useSelector(state=>state.product)
    return(

        <div className="container">
            <Helmet><title>Products</title></Helmet>
             <h2>Newly Arrived</h2>
            <div className="row">
            {
                items.map((item)=>(
                    
                    <div className="card userproduct-card">
                       
                        <img className="p-image" src={item.images} alt=""/>
                            <h5>{item.title}</h5>
                            <p>Price:{item.price}</p>
                            <p>Rating:{item.rating}</p>
                            <p>Offer:{item.discountPercentage}</p>
                            <button>Add to cart</button>  
                    </div>
                ))
            }
            </div>
        </div>
    )
}
export default UserProduct