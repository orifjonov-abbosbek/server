const express = require("express");
const app = express();
const authRoutes = require("./routes/authRouter");

app.use(express.json());

// Set up routes
app.use("/auth", authRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
