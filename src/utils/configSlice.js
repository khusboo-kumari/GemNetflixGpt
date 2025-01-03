import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
    name: "config" , 
    initialState:{
        lang : "en" 
    },
    reducers:{
        changeLanguage : (action, state) =>{
            action.lang = state.payload ;
        }
    }
})

export const {changeLanguage} = configSlice.actions ; 
export default configSlice.reducer ; 