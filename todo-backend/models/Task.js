// task schema
const mongoose = require("mongoose");

// 1️⃣ Define schema
const taskSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please add a task title"], // Validation
    },
    completed: {
      type: Boolean,
      default: false, // Task is incomplete by default
    },
  },
  {
    timestamps: true, // Automatically add createdAt and updatedAt fields
  }
);

// 2️⃣ Create model from schema
const Task = mongoose.model("Task", taskSchema);

// 3️⃣ Export the model
module.exports = Task;
