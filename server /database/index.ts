import mongoose from "mongoose";

const MONGO_URI = "mongodb://127.0.0.1:27017/travel-guide";

const connection = mongoose.connect(MONGO_URI);
connection
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

export default connection;
