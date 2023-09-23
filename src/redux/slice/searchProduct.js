import { createSlice } from "@reduxjs/toolkit";
const initialState = '';
const searchProduct = createSlice({
    name: 'searchProduct',
    initialState,
    reducers: {
        getSearchProductData: (state, action) => {
            console.log(state, action.payload)
            return action.payload;
        }
    }
})

export const {getSearchProductData} = searchProduct.actions;
export default searchProduct.reducer;