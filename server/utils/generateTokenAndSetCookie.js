import jwt from "jsonwebtoken";

const generateTokenAndSetCookie = async (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "15d",
  });

  res.cookie("jwt", token, {
    maxAge: 60 * 60 * 24 * 15 * 1000,
    httpOnly: true,
  });
};

export default generateTokenAndSetCookie;
