import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../api';

// Async actions
export const fetchGoals = createAsyncThunk('goals/fetchGoals', async () => {
  const response = await api.get('/getGoals');
  return response.data;
});

export const addGoal = createAsyncThunk('goals/addGoal', async (goal) => {
  const response = await api.post('/addGoal', goal);
  return response.data;
});

export const removeGoal = createAsyncThunk('goals/removeGoal', async (id) => {
  await api.delete(`/removeGoal/${id}`);
  return id;
});

const goalsSlice = createSlice({
  name: 'goals',
  initialState: {
    items: [],
    status: 'idle',
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGoals.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(addGoal.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(removeGoal.fulfilled, (state, action) => {
        state.items = state.items.filter(g => g._id !== action.payload);
      });
  },
});

export default goalsSlice.reducer;