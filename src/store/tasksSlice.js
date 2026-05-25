import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../api';

// Async actions
export const fetchTasks = createAsyncThunk('tasks/fetchTasks', async () => {
  const response = await api.get('/getTasks');
  return response.data;
});

export const addTask = createAsyncThunk('tasks/addTask', async (task) => {
  const response = await api.post('/addTask', task);
  return response.data;
});

export const removeTask = createAsyncThunk('tasks/removeTask', async (id) => {
  await api.delete(`/removeTask/${id}`);
  return id;
});

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    items: [],
    status: 'idle',
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(addTask.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(removeTask.fulfilled, (state, action) => {
        state.items = state.items.filter(t => t._id !== action.payload);
      });
  },
});

export default tasksSlice.reducer;