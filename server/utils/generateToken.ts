import jwt from "jsonwebtoken";

const generateToken = (userId: string) => {
  const secret = process.env.JWT_SECRET;
  console.log("JWT_SECRET:", secret);  // This will log the secret (should be `my_super_secret_key` or your set secret)

  if (!secret) {
    throw new Error("JWT_SECRET is not defined in environment variables");
  }

  return jwt.sign({ userId }, secret, { expiresIn: "15d" });
};

export default generateToken;
