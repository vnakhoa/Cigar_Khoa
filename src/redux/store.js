
import { configureStore } from "@reduxjs/toolkit";
import backHome from "./slice/backHome";
import cart_Products from './slice/cart_Products';


const store = configureStore({
    reducer: {
        backHome,
        cart_Products,
    }
})
export default store;