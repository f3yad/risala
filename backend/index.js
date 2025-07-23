const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

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

// server listener
const PORT = process.env.PORT || 3300;
app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
    exit(1);
  }

  console.log(`the Risala server is running on: http://localhost:${PORT}/`)
});