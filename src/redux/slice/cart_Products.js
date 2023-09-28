import { createSlice } from "@reduxjs/toolkit";

let initialState = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];

const cart_Products = createSlice({
    name: 'cartProducts',
    initialState,
    reducers: {
        addProduct: (state, action) => {
            const findItem = state.find((item) => item._id == action.payload._id);
            console.log(state)
            console.log('findItemADD', findItem)
            if (findItem && Object.keys(findItem).length > 0) {
                console.log('kkkkkkkkkk')
                const currentState = state.map((item) => {
                    if (findItem._id == item._id) {
                        if (action.payload.qty)
                            return { ...item, qty: item.qty + action.payload.qty };
                        else {
                            return { ...item, qty: item.qty + 1 };
                        }
                    }
                    else {
                        return item;
                    }
                })
                localStorage.setItem('cart', JSON.stringify(currentState))
                return currentState;
            }
            else {
                if (action.payload.qty) {
                    const currentState = [...state, { ...action.payload }];
                    localStorage.setItem('cart', JSON.stringify(currentState))
                    return currentState;
                }
                else {
                    const currentState = [...state, { ...action.payload, qty: 1 }]
                    localStorage.setItem('cart', JSON.stringify(currentState))
                    return currentState;
                }
            }
        },

        descreaseProduct: (state, action) => {
            const findItem = state.find((item) => item._id == action.payload._id);
            console.log('findItemDESCREASE', findItem)
            if (findItem) {
                if (findItem.qty && findItem.qty > 1) {
                    const currentState = state.map((item) => {
                        if (findItem._id == item._id) {
                            return { ...item, qty: item.qty - 1 };
                        }
                        else {
                            return { ...item };
                        }
                    })

                    localStorage.setItem('cart', JSON.stringify(currentState));
                    return currentState;
                }
                else if (findItem.qty && findItem.qty == 1) {
                    const currentState = state.filter((item) => item._id != action.payload._id);
                    localStorage.setItem('cart', JSON.stringify(currentState));
                    return currentState;
                }
            }
        },

        increaseProduct: (state, action) => {
            const currentState = state.map((item) => {
                if (action.payload._id == item._id) {
                    return { ...item, qty: item.qty + 1 };
                }
                else {
                    return { ...item };
                }
            })
            localStorage.setItem('cart', JSON.stringify(currentState));
            return currentState;
        },

        deleteItemProduct: (state, action) => {
            const currentState = state.filter((item) => item._id != action.payload._id);
            localStorage.setItem('cart', JSON.stringify(currentState));
            return currentState;
        }
    }
})

export const { addProduct, descreaseProduct, increaseProduct, deleteItemProduct } = cart_Products.actions;
export default cart_Products.reducer;