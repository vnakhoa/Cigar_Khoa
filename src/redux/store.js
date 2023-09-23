
import { configureStore } from "@reduxjs/toolkit";
import backHome from "./slice/backHome";
import cart_Products from './slice/cart_Products';
import detail_Product from "./slice/detail_Product";
import data_Products from "./slice/data_Products";
import categorySoft from "./slice/categorySoft";
import searchProduct from "./slice/searchProduct";

const store = configureStore({
    reducer: {
        backHome,
        cart_Products,
        detail_Product,
        data_Products,
        categorySoft,
        searchProduct
    }
})
export default store;