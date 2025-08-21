const mongoose = require("mongoose");

const URI = process.env.MONGODB_URI;

const connectDB = async () => {
  try {
    await mongoose.connect(URI);
    console.log("Connection successful to Database");
  } catch (error) {
    console.error(error.message);
    process.exit();
  }
};

module.exports = connectDB;
