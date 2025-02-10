import mongoose from "mongoose";

const MONGO_URI = "mongodb://localhost:27017/phrases";

// Function to establish connection and handle errors asynchronously
const connection = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1); // Exit the process if DB connection fails
  }
};

export default connection;
