import { createSlice } from '@reduxjs/toolkit'


const savedUser = localStorage.getItem("userInfo") ? JSON.parse(localStorage.getItem("userInfo")) : null;

const UserSlice = createSlice ({
    name:"user",
    initialState: {
        userInfo: savedUser
    },
    reducers: {
        addUserInfo: (state, action) => {
            state.userInfo = action.payload;
            localStorage.setItem("userInfo", JSON.stringify(action.payload));
        },
        removeUserInfo: (state) => {
            state.userInfo = null;
            localStorage.removeItem("userInfo")
        },
    }
}) 

export const { addUserInfo, removeUserInfo } = UserSlice.actions;

export default UserSlice.reducer;