import { createAsyncThunk } from "@reduxjs/toolkit";

// Get items
export const getTasksInfo = createAsyncThunk("task/getTasksInfo", async () => {
  const response = await fetch(`${process.env.REACT_APP_URL_DB}`, {
    method: "GET",
  });

  return await response.json();
});

// Add items
export const postTasksInfo = createAsyncThunk(
  "task/postTasksInfo",
  async (obj: { text: string; done: boolean }) => {
    const response = await fetch(`${process.env.REACT_APP_URL_DB}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text: obj.text, done: obj.done }),
    });

    return await response.json();
  }
);

// Delete item
export const deleteTasksInfo = createAsyncThunk(
  "task/deleteTasksInfo",
  async (id: number) => {
    await fetch(`${process.env.REACT_APP_URL_DB}/${id}`, {
      method: "DELETE",
    });

    return id;
  }
);

// Update items
export const putTasksInfo = createAsyncThunk(
  "task/putTasksInfo",
  async (obj: { id: number; text: string; done: boolean }) => {
    const response = await fetch(`${process.env.REACT_APP_URL_DB}/${obj.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text: obj.text, done: obj.done }),
    });

    return await response.json();
  }
);
