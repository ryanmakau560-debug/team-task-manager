import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../features/authSlice';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';

export default function Dashboard() {
  const dispatch = useDispatch();

  // useCallback prevents this function from being recreated every time the component renders
  const handleLogout = useCallback(() => {
    dispatch(logout());
  }, [dispatch]);

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1>Lume Dashboard</h1>
        <button onClick={handleLogout}>Log Out</button>
      </header>

      <section style={{ marginTop: '20px' }}>
        <TaskForm />
      </section>

      <section style={{ marginTop: '30px' }}>
        <h2>Current Tasks</h2>
        <TaskList />
      </section>
    </div>
  );
}