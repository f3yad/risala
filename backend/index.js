const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv").config();
const userRoute = require("./src/routes/user");
const errorHandler = require("./src/middlewares/errorHandler");

// server app init
const app = express();
app.use(express.json());
app.use(cors());

// hello endpoint
app.get("/", (req, res) => {
  res.json({
    status: "the Risala server is up and running!"
  });
});


// routes
app.use("/user", userRoute);


// global error handler
app.use(errorHandler)

// server listener
const PORT = process.env.PORT || 3300;
app.listen(PORT, (error) => {
  if (error) {
    console.log(error);
    exit(1);
  }

  console.log(`the Risala server is running on: http://localhost:${PORT}/`)
});