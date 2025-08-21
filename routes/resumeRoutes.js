const express = require("express");
const router = express.Router();
const auth = require("../middlewares/auth_middleware");
const upload = require("../middlewares/upload");
const User = require("../models/user");

// upload resume

router.post("/upload", auth, upload.single("resume"), async (req, res) => {
  try {
    const user = await User.findById(req.user.userId);
    if (!user) return res.status(404).json({ message: "User not found" });

    user.resume = req.file.path;
    await user.save();

    res.json({ message: "Resume upload successfully", path: req.file.path });
  } catch (error) {
    res.status(500).json({ error: "Upload failed" });
  }
});

module.exports = router;
