import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
    name: 'user',
    initialState: {},
    reducers: {
        addUser : (state, action) => {
            state['user'] = action.payload;
        }
    }

})

export const {addUser} = UserSlice.actions;
export default UserSlice.reducer;
