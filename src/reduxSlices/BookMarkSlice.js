import { createSlice } from "@reduxjs/toolkit";

const BookMarkSlice = createSlice({
    name : 'bookmark',
    initialState: [],
    reducers: {
        addToBookmark : (state, action) => {
            console.log('before', state.length)
            
            state.push(action.payload);
            console.log('after', state.length);
        },
        removeBookmark : (state, action) => {
            const newState = state.filter((bookmark) => bookmark._id !== action.payload._id);
            console.log(newState.length);
            return newState
        }
    }
})


export const {addToBookmark, removeBookmark } = BookMarkSlice.actions;
export default BookMarkSlice.reducer;