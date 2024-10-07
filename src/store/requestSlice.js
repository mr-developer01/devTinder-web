import { createSlice } from "@reduxjs/toolkit";

const requestSlice = createSlice({
  name: "request",
  initialState: null,
  reducers: {
    addRequest: (state, action) => action.payload,
    removeRequest: (state, action) => null,
    removRequestOnAccept: (state, action) => {
        return state.filter((request) => request._id!== action.payload);
    }
  },
});

export const { addRequest, removeRequest, removRequestOnAccept } = requestSlice.actions;

export default requestSlice.reducer;