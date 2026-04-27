import { useDispatch } from "react-redux";
import { deleteTask, toggleTask } from "../redux/taskSlice";
import React from "react";

const TaskItem = React.memo(({ task }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <p>
        {task.title} - {task.status}
      </p>

      <button onClick={() => dispatch(toggleTask(task.id))}>
        Toggle
      </button>

      <button onClick={() => dispatch(deleteTask(task.id))}>
        Delete
      </button>
    </div>
  );
});

export default TaskItem;