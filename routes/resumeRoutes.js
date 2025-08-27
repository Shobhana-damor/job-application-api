const express = require("express");
const router = express.Router();
const auth = require("../middlewares/auth_middleware");
const upload = require("../middlewares/upload");
const User = require("../models/user");

// Upload resume
router.post("/upload", auth, upload.single("resume"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    const user = await User.findById(req.user.userId);
    if (!user) return res.status(404).json({ message: "User not found" });

    // Store relative path (for serving in frontend)
    user.resume = `/uploads/${req.file.filename}`;
    await user.save();

    res.json({
      message: "Resume uploaded successfully",
      path: `/uploads/${req.file.filename}`,
    });
  } catch (error) {
    console.error("Upload error:", error.message);
    res.status(500).json({ error: "Server error", details: error.message });
  }
});

module.exports = router;
