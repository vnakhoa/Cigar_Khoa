import { createSlice } from "@reduxjs/toolkit";

const backHome = createSlice({
    name: 'backHome',
    initialState: 'HOME',
    reducers: {
        back: (state, action) => {
            return action.payload;
        }
    }
})

export const {back} = backHome.actions;
export default backHome.reducer;
