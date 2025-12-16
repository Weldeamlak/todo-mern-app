const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");

const app = express();
const PORT = 5000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Import routes
const taskRoutes = require("./routes/taskRoutes");

// Mount routes
app.use("/api/tasks", taskRoutes);

// Test route
app.get("/", (req, res) => {
  res.send("API is running");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
