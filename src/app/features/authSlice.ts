import {createSlice} from '@reduxjs/toolkit'


export interface AuthState{
    isLogged : boolean,
}


const initialState:AuthState ={
    isLogged:false,
}


const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{
        toggleIsLogged : (state) =>{
            state.isLogged = !state.isLogged
        }
    }
})


export const {toggleIsLogged} = authSlice.actions

export default authSlice.reducer