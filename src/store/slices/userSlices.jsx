import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: 1, text: "Hello World" }],
};

export const userSlices = createSlice({
  name: "Todo",
  initialState,
  reducers:{
    
  }
})