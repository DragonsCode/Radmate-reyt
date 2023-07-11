import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    profile: {
        id: 1,
        nickname: "Anonymous",
        theme: "black",
        start: "main",
        notifications: true
    }
};

const profileSlice = createSlice({
    name: "profile",
    initialState,
    reducers: {
        changeNickname: (state, action) => {
            state.profile.nickname = action.payload;
        },
        changeTheme: (state, action) => {
            state.profile.theme = action.payload;
        },
        changeStart: (state, action) => {
            state.profile.start = action.payload;
        },
        changeNotifications: (state, action) => {
            state.profile.notifications = action.payload;
        },
    },
});

export const { changeNickname, changeTheme, changeStart, changeNotifications } = profileSlice.actions;

export default profileSlice.reducer;