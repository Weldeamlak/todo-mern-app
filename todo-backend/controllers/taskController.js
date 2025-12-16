// logic for each route

const mongoose = require("mongoose");
const Task = require("../models/Task");

// @desc    Get all tasks
// @route   GET /api/tasks
// @access  Public
const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find(); // Fetch all tasks from MongoDB
    res.json(tasks); // Send tasks as JSON
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Create a new task
// @route   POST /api/tasks
// @access  Public
const createTask = async (req, res) => {
  try {
    const { title } = req.body;

    if (!title) {
      return res.status(400).json({ message: "Task title is required" });
    }

    const task = new Task({ title });
    const createdTask = await task.save(); // Save task in DB
    res.status(201).json(createdTask);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Update a task
// @route   PUT /api/tasks/:id
// @access  Public
const updateTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);

    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    task.title = req.body.title ?? task.title;
    task.completed = req.body.completed ?? task.completed;

    const updatedTask = await task.save();
    res.json(updatedTask);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Delete a task
// @route   DELETE /api/tasks/:id
// @access  Public
const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;

    // Check if ID is a valid ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid task ID" });
    }

    const deletedTask = await Task.findByIdAndDelete(id);

    if (!deletedTask) {
      return res.status(404).json({ message: "Task not found" });
    }

    res.json({ message: "Task removed" });
  } catch (error) {
    console.error(error); // Log error for debugging
    res.status(500).json({ message: "Server error" });
  }
};

// Export all controller functions
module.exports = {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
};
