import { createSlice } from "@reduxjs/toolkit";
import { Action } from "@remix-run/router";

const feedSlice = createSlice({
    name: "feed",
    initialState: null,
    reducers: {
        addFeed: (state, action) => action.payload,
        removeFeed: () => null 
    }
})

export const {addFeed, removeFeed} = feedSlice.actions;
export default feedSlice.reducer;