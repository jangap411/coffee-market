require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 5500;
const NODE_ENV = process.env.NODE_ENV;
const http = require("http");
const morgan = require("morgan");

if (NODE_ENV !== "production") {
  app.use(morgan("dev"));
}

const server = http.createServer(app);
server.listen(PORT, () => console.log(`\nlistening on port:${PORT}\n`));
