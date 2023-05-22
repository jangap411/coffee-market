require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 5500;
const NODE_ENV = process.env.NODE_ENV;
const http = require("http");
const morgan = require("morgan");
const { connect } = require("./config/database");

if (NODE_ENV !== "production") {
  app.use(morgan("dev"));
}

app.get("/", (req, res) => {
  res.status(200).json({ status: "success", data: "home routes" });
});

app.post("/", (req, res) => {
  res.status(201).json({ status: "success", data: "home routes post" });
});

const server = http.createServer(app);
server.listen(PORT, () => {
  connect();
  console.log(`\nlistening on port:${PORT}\n`);
});
