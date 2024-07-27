import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'

// Define a type for the slice state
export interface ChatOptionsState {
  activeOptionsTab: number
}

// Define the initial state using that type
const initialState: ChatOptionsState = {
  activeOptionsTab: 1,
}

export const chatOptionsSlice = createSlice({
  name: 'chatOptions',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setChatOptionsTab: (state, action: PayloadAction<number>) => {
      state.activeOptionsTab = action.payload
    },
  },
})

export const { setChatOptionsTab } = chatOptionsSlice.actions

export const selectActiveOptionsTab = (state:RootState) => state.chatOptions.activeOptionsTab

export default chatOptionsSlice.reducer