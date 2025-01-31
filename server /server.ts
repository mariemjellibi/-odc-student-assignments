import express, { Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import PhrasesRouter from "./routes";
import connection from "./database";
console.log(connection);

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

// Middleware
app.use(cors());
app.use(express.json());

// Routes

app.use("/api/phrases", PhrasesRouter);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
