const jwt = require("jsonwebtoken");

const authMiddleware = async (req, res, next) => {
  const token = req.headers.authorization;

  if (!token || !token.startsWith("Bearer"))
    // user expire token use kar raha he to will receive 401 error
    return res
      .status(401)
      .json({ message: "Unauthorized HTTP, Token missing" });

  const jwttoken = token.split(" ")[1]; //sirf token milega
  console.log("token from auth middleware", jwttoken);

  try {
    const decoded = jwt.verify(jwttoken, process.env.JWT_SECRET_KEY);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Unauthorize, Invalid token" });
  }
};
module.exports = authMiddleware;
