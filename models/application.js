const mongoose = require("mongoose");
const applicationSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  job: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Job",
  },
  resumePath: { type: String },
  appliedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Application", applicationSchema);
