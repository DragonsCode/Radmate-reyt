import { configureStore } from "@reduxjs/toolkit";
import storyReducer from "./features/story/storySlice";
import profileReducer from "./features/profile/profileSlice";

const store = configureStore({
  reducer: {
    story: storyReducer,
    profile: profileReducer,
  },
});

export default store;