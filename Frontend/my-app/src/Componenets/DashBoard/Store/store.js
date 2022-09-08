import { configureStore } from "@reduxjs/toolkit";
// import slices we created

import productReducer from "../Slices/ProductSlice"
import { ProductFetch } from  "../Slices/ProductSlice"
const  store=configureStore({
    reducer:{
           
           product:productReducer                
    }
})

store.dispatch(ProductFetch())
export default store