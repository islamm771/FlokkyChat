import { createSlice } from "@reduxjs/toolkit";

export const tabsSliceOnline = createSlice({
  name: "tabsOnline",
  initialState: {
    activeTabOnline: 1,
  },
  reducers: {
    setActiveTabOnline: (state, action) => {
      state.activeTabOnline = action.payload;
    },
  },
});

export const { setActiveTabOnline } = tabsSliceOnline.actions;

export default tabsSliceOnline.reducer;
