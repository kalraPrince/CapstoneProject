
import { configureStore } from "@reduxjs/toolkit";
// import slices we created
import productReducer from "./ProductSlice"
import cartReducer,{cartTotal} from "../Store/CartSlice";
import { ProductFetch } from "./ProductSlice"
import wishReducer from "./WishListSlice"
const store=configureStore({
    reducer:{
           product:productReducer,
        cart: cartReducer,
            wish: wishReducer
           
                     
    }
})

store.dispatch(ProductFetch())
store.dispatch(cartTotal());
export default store