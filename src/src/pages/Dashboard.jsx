import React from 'react';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';

export default function Dashboard() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Task Manager Dashboard</h1>
      
      {/* Form to add tasks */}
      <TaskForm />
      
      <hr />
      
      <h2>Your Tasks</h2>
      {/* List to display tasks */}
      <TaskList />
    </div>
  );
}
