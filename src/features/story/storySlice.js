import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  stories: [],
};

const storySlice = createSlice({
    name: "story",
    initialState,
    reducers: {
        addStory: (state, action) => {
            let created = new Date();
            const offset = created.getTimezoneOffset();
            created = new Date(created.getTime() - (offset*60*1000));
            const date = created.toISOString().split('T')[0];

            state.stories.push({
                id: Date.now(),
                text: action.payload,
                date: date
            });
        },
        deleteStory: (state, action) => {
            state.stories = state.stories.filter((story) => story.id !== action.payload);
        },
    },
});

export const { addStory, deleteStory } = storySlice.actions;

export default storySlice.reducer;