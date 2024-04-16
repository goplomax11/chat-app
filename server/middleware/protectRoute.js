import jwt from "jsonwebtoken";
import User from "../models/user.model";

const protectRoute = async (req, res, next) => {
  try {
    const token = req.cookie.jwt;

    if (!token) {
      return res.status(401).json({ error: "Unauthorized - no token provided" });
    }

    const decode = jwt.verify(token, process.env.JWT_SECRET);

    if (!decode) {
      return res.status(401).json({ error: "Unauthorized - Invalid token" });
    }

    const user = await User.findById(decode.userId).select("-password");
    req.user = user;

    next();

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
  } catch (error) {
    console.log("Error in protectedRoute middleware", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

export default protectRoute;
