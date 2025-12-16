const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const connectDB = async () => {
  try {
    // Allow either a full MONGO_URI or build one from components (safer for handling special chars)
    let mongoUri = process.env.MONGO_URI;
    if (!mongoUri) {
      const user = process.env.MONGO_USER;
      const pass = process.env.MONGO_PASS;
      const host = process.env.MONGO_HOST || "localhost:27017";
      const db = process.env.MONGO_DB || "test";

      if (user && pass) {
        // If using an Atlas SRV host, keep the +srv scheme; otherwise use standard mongodb://
        const isSrv = host.includes("mongodb.net") || host.includes("+srv");
        const scheme = isSrv ? "mongodb+srv" : "mongodb";
        mongoUri = `${scheme}://${encodeURIComponent(
          user
        )}:${encodeURIComponent(
          pass
        )}@${host}/${db}?retryWrites=true&w=majority`;
      } else {
        mongoUri = `mongodb://${host}/${db}`;
      }
    }

    await mongoose.connect(mongoUri);
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
