const express = require("express");
const cookieParser = require("cookie-parser");
require("./src/config/env");

const authRoutes = require("./src/modules/auth/auth.routes");
const { protect } = require("./src/modules/auth/auth.middleware");

const app = express();

app.use(express.json());
app.use(cookieParser());

// Auth module
app.use("/api/auth", authRoutes);

// Protected route test
app.get("/api/protected", protect, (req, res) => {
  res.json({
    message: "Secure access granted",
    user: req.user,
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});