import { createSlice } from '@reduxjs/toolkit';

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    items: [
      { id: 1, name: 'Proyecto de Curso de desarrollo web', description: 'Elaborar una aplicación web responsive', dueDate: '31/05/2024' },
      { id: 2, name: 'Terminar de leer libro', description: 'Finalizar mi libro de react', dueDate: '31/05/2024' },
      { id: 3, name: 'Suba Actividad 1', description: 'Responder el test en el GES', dueDate: '31/05/2024' },
    ]
  },
  reducers: {
    addTask: (state, action) => {
      state.items.push(action.payload);
    },
    removeTask: (state, action) => {
      state.items = state.items.filter(task => task.id !== action.payload);
    },
  },
});

export const { addTask, removeTask } = tasksSlice.actions;
export default tasksSlice.reducer;