import { createSlice, PayloadAction } from '@reduxjs/toolkit'
// import type { RootState } from '../store'

// Define a type for the slice state
export interface ModalState {
  isMuteModalOpen:boolean,
  isDeleteModalOpen:boolean,
  isArchiveModalOpen:boolean
}

// Define the initial state using that type
const initialState: ModalState = {
    isMuteModalOpen: false,
    isDeleteModalOpen: false,
    isArchiveModalOpen:false
}

export const modalsSlice = createSlice({
  name: 'modals',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setIsMuteModalOpen: (state, action: PayloadAction<boolean>) => {
      state.isMuteModalOpen = action.payload
    },
    setIsDeleteModalOpen: (state, action: PayloadAction<boolean>) => {
      state.isDeleteModalOpen = action.payload
    },
    setIsArchiveModalOpen: (state, action: PayloadAction<boolean>) => {
      state.isArchiveModalOpen = action.payload
    },
  },
})

export const { setIsMuteModalOpen,setIsDeleteModalOpen,setIsArchiveModalOpen } = modalsSlice.actions

// Other code such as selectors can use the imported `RootState` type
// export const selectChatTab = (state: RootState) => state.chatTab.value

export default modalsSlice.reducer