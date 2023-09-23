import { createSlice } from "@reduxjs/toolkit";

let initialState = {};

const detail_Product = createSlice({
    name: 'detail_Product',
    initialState,
    reducers: {
        getDetailProduct: (state, action) =>{
            console.log(action.payload)
            return action.payload;
        },

        increaseQuantity: (state, action) => {
            return {...state, qty: state.qty + 1}
        },

        descreaseQuantity: (state, action) => {
            if(action.payload && action.payload.qty && action.payload.qty > 1){
                return {...state, qty: state.qty - 1}
            }
        }
    }
})

export const {getDetailProduct, increaseQuantity, descreaseQuantity} = detail_Product.actions;
export default detail_Product.reducer;