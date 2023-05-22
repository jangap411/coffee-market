require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 5500;
const NODE_ENV = process.env.NODE_ENV;
const http = require("http");
const morgan = require("morgan");

// routes
const { userRoutes } = require("./routes/index");

if (NODE_ENV !== "production") {
  app.use(morgan("dev"));
}

// middlewares
app.use(userRoutes);

app.get("/", (req, res) => {
  res.status(200).json({ status: "success", data: "home routes" });
});

app.post("/", (req, res) => {
  res.status(201).json({ status: "success", data: "home routes post" });
});

/**
 * start the server
 */
const server = http.createServer(app);
server.listen(PORT, () => {
  console.log(`\nlistening on port:${PORT}\n`);
});
