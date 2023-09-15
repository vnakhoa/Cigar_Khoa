import { createSlice } from "@reduxjs/toolkit";

let initialState = [];

const cart_Products = createSlice({
    name: 'cartProducts',
    initialState,
    reducers: {
        addProduct: (state, action) => {
            const findItem = state.find((item) => item._id == action.payload._id);
            console.log('findItemADD', findItem)
            if (findItem && Object.keys(findItem).length > 0) {
                console.log('kkkkkkkkkk')
                return state.map((item) => {
                    if (findItem._id == item._id) {
                        if (action.payload.qty)
                            return { ...item, qty: item.qty + action.payload.qty };
                        else{
                            return { ...item, qty: item.qty +1 };
                        }
                    }
                    else{
                        return item;
                    }
                })
            }
            else {
                if (action.payload.qty){
                    return [...state, { ...action.payload }];
                }
                else {
                    return [...state, { ...action.payload, qty: 1 }];
                }
            }
        },

        descreaseProduct: (state, action) => {
            const findItem = state.find((item) => item._id == action.payload._id);
            console.log('findItemDELETE', findItem)
            if (findItem) {
                if (findItem.qty && findItem.qty > 1) {
                    return state.map((item) => {
                        if (findItem._id == item._id) {
                            return { ...item, qty: item.qty - 1 };
                        }
                        else {
                            return { ...item };
                        }
                    })
                }
                else if (findItem.qty && findItem.qty == 1) {
                    return state.filter((item) => item._id != action.payload._id);
                }
            }
        },

        increaseProduct: (state, action) => {
            return state.map((item) => {
                if (action.payload._id == item._id) {
                    return { ...item, qty: item.qty + 1 };
                }
                else {
                    return { ...item };
                }
            })
        },  

        deleteItemProduct: (state, action) => {
            return state.filter((item) => item._id != action.payload._id);
        }
    }
})

export const { addProduct, descreaseProduct, increaseProduct, deleteItemProduct } = cart_Products.actions;
export default cart_Products.reducer;