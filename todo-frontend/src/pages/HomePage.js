import { useEffect, useState } from "react";
import { getTasks } from "../api/taskApi";
import TaskForm from "../components/TaskForm";
import TaskItem from "../components/TaskItem";

const HomePage = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const data = await getTasks();
      setTasks(data);
    };
    fetchTasks();
  }, []);

  const handleTaskAdded = (task) => setTasks([task, ...tasks]);
  const handleTaskUpdated = (updatedTask) =>
    setTasks(tasks.map((t) => (t._id === updatedTask._id ? updatedTask : t)));
  const handleTaskDeleted = (id) => setTasks(tasks.filter((t) => t._id !== id));

  return (
    <div className="app-container">
      <div className="app-header">
        <h1 className="app-title">To-Do List</h1>
        <p className="app-subtitle">Stay organized and productive</p>
      </div>

      <TaskForm onTaskAdded={handleTaskAdded} />

      <div className="tasks-container">
        {tasks.length === 0 ? (
          <div className="empty-state">
            <div className="empty-state-icon">📝</div>
            <h3>No tasks yet</h3>
            <p>Add your first task above to get started!</p>
          </div>
        ) : (
          <div className="tasks-list">
            {tasks.map((task) => (
              <TaskItem
                key={task._id}
                task={task}
                onTaskUpdated={handleTaskUpdated}
                onTaskDeleted={handleTaskDeleted}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
