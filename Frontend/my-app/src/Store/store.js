import { configureStore } from "@reduxjs/toolkit"
import ProductReducer from './productSlice'
import { ProductFetch } from "./productSlice"
const store=configureStore({
    reducer:{
        product:ProductReducer,
    }
})

store.dispatch(ProductFetch())
export default store