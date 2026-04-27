import { createSlice } from '@reduxjs/toolkit';

const taskSlice = createSlice({
  name: 'tasks',
  initialState: JSON.parse(localStorage.getItem('tasks')) || [],
  reducers: {
    addTask: (state, action) => { state.push(action.payload); },
    deleteTask: (state, action) => state.filter(t => t.id !== action.payload),
    toggleTask: (state, action) => {
      const task = state.find(t => t.id === action.payload);
      if (task) task.completed = !task.completed;
    }
  }
});
export const { addTask, deleteTask, toggleTask } = taskSlice.actions;
export default taskSlice.reducer;