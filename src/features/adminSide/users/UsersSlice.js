import { createSlice } from "@reduxjs/toolkit";

export const UsersSlice = createSlice({
    name: "users",
    initialState: {
        users: [],
        activeUser: ''
    },
    reducers: {
        setActiveUser: (state, action) => {
            state.activeUser = action.payload
        }
    }
})

export const {setActiveUser} = UsersSlice.actions;
export const selectActiveUser = (state) => state.users.activeUser;
export default UsersSlice.reducer;