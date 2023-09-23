import { createSlice } from "@reduxjs/toolkit"

const initialState = 'All';

const categorySoft = createSlice({
    name: 'categorySoft',
    initialState,
    reducers: {
        changeCategory: (state, action) => {
            console.log(state, action.payload)
            return action.payload;
        }
    }
})

export const {changeCategory} = categorySoft.actions;
export default categorySoft.reducer;