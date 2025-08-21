require("dotenv").config();
const express = require("express");
const app = express();
const connectDB = require("./util/db");
const authRoutes = require("./routes/authRoutes");
const resumeRoutes = require("./routes/resumeRoutes");
const jobRoutes = require("./routes/jobRoutes");
const applicationRoutes = require("./routes/applicationRoutes");

app.use(express.json());

app.use("/auth", authRoutes);
app.use("/resume", resumeRoutes);
// also serve uploaded files
app.use("/upload", express.static("upload"));
app.use("/jobs", jobRoutes);
app.use("/applications", applicationRoutes);

// temporary home route
app.get("/", (req, res) => {
  res.send("Job Application Portal API");
});

const PORT = process.env.PORT || 5000;

// Connect mongodb and start server
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`server running on port no: ${PORT}`);
  });
});
