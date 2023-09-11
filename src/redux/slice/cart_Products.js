import { createSlice } from "@reduxjs/toolkit";

let initialState = [];

const cart_Products = createSlice({
    name: 'cartProducts',
    initialState,
    reducers: {
        addProduct: (state, action) => {
            return [...state, action.payload];
        },

        deleteProduct: (state, action) => {
            return state.filter((item) => item.khoa != action.payload.khoa);
        }
    }
})

export const {addProduct, deleteProduct} = cart_Products.actions;
export default cart_Products.reducer;