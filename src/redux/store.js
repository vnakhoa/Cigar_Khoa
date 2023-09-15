
import { configureStore } from "@reduxjs/toolkit";
import backHome from "./slice/backHome";
import cart_Products from './slice/cart_Products';
import detail_Product from "./slice/detail_Product";
import data_Products from "./slice/data_Products";


const store = configureStore({
    reducer: {
        backHome,
        cart_Products,
        detail_Product,
        data_Products,
    }
})
export default store;