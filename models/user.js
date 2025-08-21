const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  resume: {
    type: String,
    default: "",
  },
});

// ? secure the password with the bcrypt
userSchema.pre("save", async function (next) {
  const user = this;

  if (!user.isModified("password")) {
    next();
  }

  try {
    const saltRound = 10;
    const hashedPassword = await bcrypt.hash(user.password, saltRound);
    user.password = hashedPassword;
  } catch (error) {
    next(error);
  }
});

// Compare the password
userSchema.methods.comparePassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

// *JWT(Json Web Tokens)
userSchema.methods.generateToken = async function () {
  try {
    return jwt.sign(
      //token verify hoga tab ye isme data milega hume database se.yaha jo payload(userid,email.etc) pass karenge uska hi data milega.
      {
        userId: this._id.toString(),
        email: this.email,
      },
      process.env.JWT_SECRET_KEY,
      {
        expiresIn: "10d",
      }
    );
  } catch (error) {
    console.error(error.message);
  }
};

const User = new mongoose.model("User", userSchema);

module.exports = User;
