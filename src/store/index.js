import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from './tasksSlice';
import goalsReducer from './goalsSlice';

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    goals: goalsReducer,
  },
});

export default store;