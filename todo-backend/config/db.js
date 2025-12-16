// mongodb connection (CommonJS)
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config(); // Load .env variables

const connectDB = async () => {
  try {
    // Use MONGO_URI from .env (works for local or Atlas)
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectDB;
