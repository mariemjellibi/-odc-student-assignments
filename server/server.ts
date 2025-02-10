import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import phrasesRouter from "./routes/phrasesRoutes";
import usersRoutes from "./routes/userRoutes";
import connection from "./database/index";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

// Middleware
app.use(cors());
app.use(express.json());

// Routes (Make sure you're passing the correct Router)
app.use("/api/phrases", phrasesRouter);
app.use("/api/users", usersRoutes);

// Start database connection
const startServer = async () => {
  try {
    await connection(); // Wait for database connection
    console.log("Database connected successfully.");
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Database connection failed:", error);
    process.exit(1); // Exit the process if database connection fails
  }
};

// Start the server
startServer();
