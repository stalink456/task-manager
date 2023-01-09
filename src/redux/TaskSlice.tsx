import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  getTasksInfo,
  postTasksInfo,
  putTasksInfo,
  deleteTasksInfo,
} from "./asyncActions";

import { ItemsState } from "./types";

const initialState: ItemsState = {
  items: [],
  loading: true,
  text: "",
};

export const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    setText: (state, action: PayloadAction<string>) => {
      state.text = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getTasksInfo.pending, (state) => {
      state.loading = true;
    }).addCase(getTasksInfo.fulfilled, (state, action) => {
      state.loading = false;
      state.items = action.payload.reverse();
    }).addCase(getTasksInfo.rejected, (state) => {
      state.loading = false;
      state.items = [];
    });
    builder.addCase(postTasksInfo.fulfilled, (state, action) => {
      state.items = [action.payload, ...state.items];
      state.text = "";
    }).addCase(postTasksInfo.rejected, (state) => {
      state.items = [];
    });
    builder.addCase(putTasksInfo.fulfilled, (state, action) => {
      state.items = state.items.map((value) =>
        value.id === action.payload.id ? action.payload : value
      );
    });
    builder.addCase(deleteTasksInfo.fulfilled, (state, action) => {
      state.items = state.items.filter((value) => value.id !== action.payload);
    }).addCase(deleteTasksInfo.rejected, (state) => {
      state.items = [];
    });
  },
});

export const { setText } = taskSlice.actions;
export default taskSlice.reducer;
