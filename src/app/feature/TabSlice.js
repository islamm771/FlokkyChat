import { createSlice } from "@reduxjs/toolkit";

export const tabsSlice = createSlice({
  name: "tabs",
  initialState: {
    activeTab: 1,
    activecrea8:1,
    activesec11:1,
    activesec1:1
  },
  reducers: {
    setActiveTab: (state, action) => {
      state.activeTab = action.payload;
    },
    setActivecrea8: (state, action) => {
      state.activecrea8 = action.payload;
    },
    setActivesec11: (state, action) => {
      state.activesec11 = action.payload;
    },
    setActivesec1: (state, action) => {
      state.activesec1 = action.payload;
    }
  },
});

export const { setActiveTab , setActivecrea8,setActivesec11,setActivesec1 } = tabsSlice.actions;


export default tabsSlice.reducer;
