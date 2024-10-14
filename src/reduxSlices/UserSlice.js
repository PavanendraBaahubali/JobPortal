import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
    name: 'user',
    initialState: {},
    reducers: {
         addUser: (state, action) => {
            state.userId = action.payload.userId;
            state.userName = action.payload.userName;
            state.emailId = action.payload.emailId;
        }
    }

})

export const {addUser} = UserSlice.actions;
export default UserSlice.reducer;
