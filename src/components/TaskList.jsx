import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask } from '../features/taskSlice';

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  // useCallback keeps this function stable so React.memo doesn't re-render unnecessarily
  const handleDelete = useCallback((id) => {
    dispatch(deleteTask(id));
  }, [dispatch]);

  if (tasks.length === 0) {
    return <p style={{ color: '#888' }}>No tasks found. Add one above!</p>;
  }

  return (
    <ul style={{ listStyle: 'none', padding: 0 }}>
      {tasks.map((task) => (
        <li 
          key={task.id} 
          style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            padding: '10px', 
            borderBottom: '1px solid #eee' 
          }}
        >
          <span>{task.text}</span>
          <button 
            onClick={() => handleDelete(task.id)}
            style={{ cursor: 'pointer' }}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

// React.memo optimizes performance by preventing re-renders if props haven't changed
export default React.memo(TaskList);