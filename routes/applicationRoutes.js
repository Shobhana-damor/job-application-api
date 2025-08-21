const express = require("express");
const router = express.Router();
const auth = require("../middlewares/auth_middleware");
const Application = require("../models/application");
// const Job = require("../models/job");

router.get("/", auth, async (req, res) => {
  try {
    const application = await Application.find({ user: req.user.userId })
      .populate("job") //to get job details
      .sort({ appliedAt: -1 }); // recent first
    res.json(application);
  } catch (error) {
    console.error(error);

    res.status(500).json({ error: "Unable to fetch application" });
  }
});

module.exports = router;
