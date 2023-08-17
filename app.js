const express = require("express");
const cors = require("cors");
const authRouter = require("./routes/authRouter");
const userRouter = require("./routes/userRouter");
const sequelize = require("./config/db");
const swaggerUi = require("swagger-ui-express");
const swaggerJsdoc = require("swagger-jsdoc");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/auth", authRouter);
app.use("/api", userRouter);


const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "User API Documentation",
      version: "1.0.0",
      description: "API documentation for the User service",
    },
  },
  apis: ["./routes/*.js"], 
};


const specs = swaggerJsdoc(options);


app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

sequelize
  .sync({ force: false })
  .then(() => {
    app.listen(4000, () => {
      console.log("Server is running on port 4000");
    });
  })
  .catch((error) => {
    console.error("Error syncing database:", error);
  });
