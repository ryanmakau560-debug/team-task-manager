import { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/taskSlice";

const TaskForm = () => {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    if (!title.trim()) return;

    dispatch(addTask({
      id: Date.now(),
      title,
      status: "Pending"
    }));

    setTitle("");
  }, [title, dispatch]);

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter task"
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default TaskForm;