
import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const data_Products = createSlice({
    name: 'data_Products',
    initialState,
    reducers: {
        getDataProducts: (state, action) => {
            return action.payload;
        }
    }
})

export const {getDataProducts} = data_Products.actions;
export default data_Products.reducer;