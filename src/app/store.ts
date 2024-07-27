import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'

import CounterSlice from "./features/counterSlice"
import AuthSlice from "./features/authSlice"
import ChatTabSlice from './features/chatTabSlice'
import ModalsSlice  from './features/modalsSlice'
import ChatOptionsSlice  from './features/chatOptionsSlice'
import SectionsSlice  from './features/sectionsSlice'

const store = configureStore({
  reducer: {
    auth:AuthSlice,
    counter:CounterSlice,
    chatTab:ChatTabSlice,
    modals:ModalsSlice,
    chatOptions:ChatOptionsSlice,
    sections:SectionsSlice
  },
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()

export default store