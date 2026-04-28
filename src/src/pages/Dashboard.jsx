import TaskForm from '../components/TaskForm';

export default function Dashboard() {
  return (
    <div>
      <h1>Task manager Dashboard</h1>
      <TaskForm />
      <h2>Your Tasks</h2>
      {/* You will add the TaskList component here later */}
    </div>
  );
}
