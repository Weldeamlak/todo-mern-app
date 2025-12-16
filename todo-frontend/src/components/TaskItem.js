import { useState } from "react";
import { updateTask, deleteTask } from "../api/taskApi";

const TaskItem = ({ task, onTaskUpdated, onTaskDeleted }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(task.title);

  const handleToggle = async () => {
    const updated = await updateTask(task._id, { completed: !task.completed });
    onTaskUpdated(updated);
  };

  const handleDelete = async () => {
    await deleteTask(task._id);
    onTaskDeleted(task._id);
  };

  const handleEdit = () => setIsEditing(true);

  const handleSave = async () => {
    const updated = await updateTask(task._id, { title: newTitle });
    onTaskUpdated(updated);
    setIsEditing(false);
  };

  return (
    <div className={`task-item ${task.completed ? "completed" : ""}`}>
      <input
        type="checkbox"
        className="task-checkbox"
        checked={task.completed}
        onChange={handleToggle}
      />
      <div className="task-content">
        {isEditing ? (
          <>
            <input
              type="text"
              className="form-input"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              style={{ margin: 0, flex: 1 }}
            />
            <div className="task-actions">
              <button className="task-button save" onClick={handleSave}>
                ✓
              </button>
            </div>
          </>
        ) : (
          <>
            <span className="task-title">{task.title}</span>
            <div className="task-actions">
              <button className="task-button edit" onClick={handleEdit}>
                ✏️
              </button>
              <button className="task-button delete" onClick={handleDelete}>
                🗑️
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default TaskItem;
