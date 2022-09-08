
import { configureStore } from "@reduxjs/toolkit";
// import slices we created

import productReducer from "./ProductSlice"
import { ProductFetch } from  "./ProductSlice"
const store=configureStore({
    reducer:{
           product:productReducer                
    }
})

store.dispatch(ProductFetch())
export default store