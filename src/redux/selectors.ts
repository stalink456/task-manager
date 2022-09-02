import { RootState } from "./store";

export const selectItems = (state: RootState) => state.task;
export const selectText = (state: RootState) => state.task.text;
