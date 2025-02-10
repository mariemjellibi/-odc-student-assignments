import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

// Extend Request type to include user
declare module "express" {
  export interface Request {
    user?: { userId: string };
  }
}

const protectRoutes = async (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    res.status(401).json({ message: "Not Authorized" });
    return; // Ensure function stops execution
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as { userId: string };
    req.user = { userId: decoded.userId };
    next(); // Call next() to continue to the next middleware
  } catch (err) {
    res.status(401).json({ message: "Invalid Token" });
  }
};

export default protectRoutes;
