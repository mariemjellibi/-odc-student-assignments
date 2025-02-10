import express from "express";
import { getProgress, register, login,setProgress } from "../controllers/usersControllers";
import protectRoutes from "../utils/protectRoutes";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/getprogress/:userId", protectRoutes, getProgress); // Ensure correct parameter
router.post("/progress/:userId",protectRoutes, setProgress); // Ensure correct parameter
export default router;
