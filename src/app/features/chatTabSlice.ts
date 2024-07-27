import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'

// Define a type for the slice state
export interface ChatTabState {
  value: number
}

// Define the initial state using that type
const initialState: ChatTabState = {
  value: 1,
}

export const chatTabSlice = createSlice({
  name: 'chatTab',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setChatTab: (state, action: PayloadAction<number>) => {
      state.value = action.payload
    },
  },
})

export const { setChatTab } = chatTabSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectChatTab = (state: RootState) => state.chatTab.value

export default chatTabSlice.reducer