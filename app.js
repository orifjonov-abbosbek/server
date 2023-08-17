// app.js
const express = require("express");
const cors = require("cors");
const authRouter = require("./routes/authRouter");
const userRouter = require("./routes/userRouter");
const sequelize = require("./config/db");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/auth", authRouter);
app.use("/api", userRouter);

sequelize
  .sync({ force: false })
  .then(() => {
    app.listen(10000, () => {
      console.log("Server is running on port 10000");
    });
  })
  .catch((error) => {
    console.error("Error syncing database:", error);
  });
