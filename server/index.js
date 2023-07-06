require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 5500;
const NODE_ENV = process.env.NODE_ENV;
const http = require("http");
const morgan = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");

// import routes
const {
  userRoutes,
  productRoutes,
  ordersRoutes,
  cartRoutes,
  authRoutes,
} = require("./routes/index");

// check node environment
if (NODE_ENV !== "production") {
  app.use(morgan("dev"));
}

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
// routes
app.use("/api/v1", [
  userRoutes,
  productRoutes,
  ordersRoutes,
  cartRoutes,
  authRoutes,
]);

app.get("/", (req, res) => {
  res.status(200).json({ status: "success", data: "home routes" });
});

/**
 * Connecting to database && start server
 */
const server = http.createServer(app);
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("\nMongo DB Connected!");
    server.listen(PORT, () => {
      console.log(`Server listening on port:${PORT}\n`);
    });
  })
  .catch((err) => {
    console.log("Error", err);
  });

module.exports = server;
