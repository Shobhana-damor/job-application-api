const User = require("../models/user");
// const bcrypt = require("bcryptjs");

// *======================
// & Registration Logic
// *======================

const register = async (req, res) => {
  try {
    // check email exist or not
    const { name, email, password } = req.body;
    const userExist = await User.findOne({ email });

    if (userExist) {
      return res.status(400).json({ message: "User already exists" });
    }

    const userCreated = await User.create({
      name,
      email,
      password,
    });
    console.log(userCreated);

    res.status(201).json({
      message: "registration successful",
      token: await userCreated.generateToken(),
      userId: userCreated._id.toString(),
    });
  } catch (error) {
    console.error(error);

    res.status(500).json("internal server error");
  }
};

// =====================
// & User login logic
// =====================

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    // email valid or not
    const userExist = await User.findOne({ email });
    if (!userExist) {
      return res.status(400).json({ message: "Invalide credentials" });
    }

    // const isMatch = await bcrypt.compare(password, userExist.password);

    const userMatch = await userExist.comparePassword(password);

    if (userMatch) {
      res.status(200).json({
        msg: "login successful",
        token: await userExist.generateToken(),
        userId: userExist._id.toString(),
      });
    } else {
      res.status(400).json({ message: "Invalid email or password" });
    }
  } catch (error) {
    res.status(500).json("internal server error");
  }
};

module.exports = { register, login };
