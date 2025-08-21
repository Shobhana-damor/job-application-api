const express = require("express");
const router = express.Router();
const auth = require("../middlewares/auth_middleware");
const User = require("../models/user");
const Job = require("../models/job");
const Application = require("../models/application");

// Apply to job
router.post("/apply/:jobId", auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.userId);
    const job = await Job.findById(req.params.jobId);

    if (!job) return res.status(404).json({ message: "Job not found" });

    if (!user.resume) {
      return res.status(400).json({ message: "Please upload resume" });
    }

    const existing = await Application.findOne({
      user: user._id,
      job: job._id,
    });

    if (existing) {
      return res.status(400).json({ message: "Already applied to this job" });
    }

    const application = new Application({
      user: user._id,
      job: job._id,
      resumePath: user.resume,
    });

    await application.save();
    res.json({ message: "Applied successfully" });
  } catch (error) {
    res.status(500).json({ error: "Application failed" });
  }
});

module.exports = router;
