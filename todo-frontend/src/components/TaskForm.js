import { useState } from "react";
import { createTask } from "../api/taskApi";

const TaskForm = ({ onTaskAdded }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page reload
    if (!title) return; // Do not submit empty task

    try {
      const newTask = await createTask({ title }); // Call backend
      onTaskAdded(newTask); // Notify parent component
      setTitle(""); // Clear input
    } catch (error) {
      console.error("Error creating task:", error);
    }
  };

  return (
    <div className="task-form">
      <h2>Add New Task</h2>
      <form onSubmit={handleSubmit} className="form-group">
        <input
          type="text"
          className="form-input"
          placeholder="What needs to be done?"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button type="submit" className="form-button">
          Add Task
        </button>
      </form>
    </div>
  );
};

export default TaskForm;
