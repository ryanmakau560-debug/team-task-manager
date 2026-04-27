import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/authSlice';
import taskReducer from '../features/taskSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    tasks: taskReducer,
  },
});

// Persistence: Save tasks to localStorage whenever they change
store.subscribe(() => {
  localStorage.setItem('tasks', JSON.stringify(store.getState().tasks));
});