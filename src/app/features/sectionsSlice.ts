import { createSlice, PayloadAction } from '@reduxjs/toolkit'
// import type { RootState } from '../store'

// Define a type for the slice state
export interface sectionsState {
  isChatContentHidden:boolean,
  isChatInfoHidden:boolean,
}

// Define the initial state using that type
const initialState: sectionsState = {
    isChatContentHidden: false,
    isChatInfoHidden:true
}

export const sectionsSlice = createSlice({
  name: 'sections',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setIsChatContentHidden: (state, action: PayloadAction<boolean>) => {
      state.isChatContentHidden = action.payload
    },
    setIsChatInfoHidden: (state, action: PayloadAction<boolean>) => {
      state.isChatInfoHidden = action.payload
    },
  },
})

export const { setIsChatContentHidden,setIsChatInfoHidden } = sectionsSlice.actions

// Other code such as selectors can use the imported `RootState` type
// export const selectChatTab = (state: RootState) => state.chatTab.value

export default sectionsSlice.reducer