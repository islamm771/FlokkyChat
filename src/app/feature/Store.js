import { configureStore } from "@reduxjs/toolkit";
import { GlobalSlice } from "./ListChatSlice";
import { tabsSlice } from "./TabSlice";
import { outletSlice } from "./outletSlice";
import { quickPostSlice } from "./quickPostSlice";
import { authSlice } from "./authSlice";
import { tabsSliceOnline } from "./TabOnlineList";

const store = configureStore({
  reducer: {
    global: GlobalSlice.reducer,
    tabs: tabsSlice.reducer,
    outlet: outletSlice.reducer,
    quickPost: quickPostSlice.reducer,
    auth: authSlice.reducer,
    tabsOnline: tabsSliceOnline.reducer
  },
});

export default store;
