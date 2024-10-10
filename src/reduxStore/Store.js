import { configureStore } from "@reduxjs/toolkit";
import  userReducer  from "../reduxSlices/UserSlice";
import  bookMarkReducer  from "../reduxSlices/BookMarkSlice";
import  popupReducer  from "../reduxSlices/PopupSlice";

const Store = configureStore({
    reducer: {
        'user' : userReducer,
        'bookmark' : bookMarkReducer,
        'please' : popupReducer
    }
})

export default Store;