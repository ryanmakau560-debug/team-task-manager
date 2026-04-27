import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../features/taskSlice';

export default function TaskForm() {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text) return;
    dispatch(addTask({ id: Date.now(), text, completed: false }));
    setText('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <input value={text} onChange={(e) => setText(e.target.value)} placeholder="New task..." />
      <button type="submit">Add Task</button>
    </form>
  );
}