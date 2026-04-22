import { createSlice } from '@reduxjs/toolkit';

const goalsSlice = createSlice({
  name: 'goals',
  initialState: {
    items: [
      { id: 1, name: 'Aprender React', description: 'Completar el curso de React', dueDate: '31/12/2024' },
      { id: 2, name: 'Leer 12 libros', description: 'Leer un libro por mes durante el año', dueDate: '31/12/2024' },
    ]
  },
  reducers: {
    addGoal: (state, action) => {
      state.items.push(action.payload);
    },
    removeGoal: (state, action) => {
      state.items = state.items.filter(goal => goal.id !== action.payload);
    },
  },
});

export const { addGoal, removeGoal } = goalsSlice.actions;
export default goalsSlice.reducer;