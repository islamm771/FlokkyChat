import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  quickPostIsActive: false,
};

export const quickPostSlice = createSlice({
  name: "quickPostSlice",
  initialState,
  reducers: {
    toggleQuickPostIsActive: (state, action) => {
      if (typeof action.payload === "boolean") {
        state.quickPostIsActive = action.payload;
      } else {
        state.quickPostIsActive = !state.quickPostIsActive;
      }
    },
  },
});

export const { toggleQuickPostIsActive } = quickPostSlice.actions;

export default quickPostSlice.reducer;
