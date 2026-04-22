import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  { id: 1, name: 'Aprender React', description: 'Completar el curso de React', dueDate: '31/12/2024' },
  { id: 2, name: 'Leer 12 libros', description: 'Leer un libro por mes durante el año', dueDate: '31/12/2024' },
];

const goalsSlice = createSlice({
  name: 'goals',
  initialState,
  reducers: {
    addGoal: (state, action) => {
      state.push(action.payload);
    },
    removeGoal: (state, action) => {
      return state.filter(goal => goal.id !== action.payload);
    },
  },
});

export const { addGoal, removeGoal } = goalsSlice.actions;
export default goalsSlice.reducer;