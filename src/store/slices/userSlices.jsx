import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: [],
  reducers: {
    addUsers(state, action) {
        state.push(action.payload)
    },
    removeUsers(state, action) {
        state.pop(action.payload)
    },
    clearUsers(state, action) {},
  },
});

export default userSlice.reducer;
