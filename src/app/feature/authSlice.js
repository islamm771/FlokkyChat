import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isExpat: false
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setIsExpat(state, action) {
            state.isExpat = action.payload.value;
        }
    }
});

export const {
    setIsExpat,
} = authSlice.actions;

export default authSlice.reducer;