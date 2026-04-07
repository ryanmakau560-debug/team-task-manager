import { useSelector } from "react-redux";
import { useMemo } from "react";
import TaskItem from "./TaskItem";

const TaskList = () => {
  const tasks = useSelector(state => state.tasks);

  const filteredTasks = useMemo(() => {
    return tasks;
  }, [tasks]);

  return (
    <div>
      {filteredTasks.length ? (
        filteredTasks.map(task => (
          <TaskItem key={task.id} task={task} />
        ))
      ) : (
        <p>No tasks yet</p>
      )}
    </div>
  );
};

export default TaskList;