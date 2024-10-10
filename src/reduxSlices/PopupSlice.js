import { createSlice } from "@reduxjs/toolkit";

const PopupSlice = createSlice({
    name : 'please',
    initialState : false,
    reducers : {
        setPopup : (state, action) => {
            return action.payload;
        }
    }
})

export const {setPopup} = PopupSlice.actions;
export default PopupSlice.reducer;