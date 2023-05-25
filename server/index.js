require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 5500;
const NODE_ENV = process.env.NODE_ENV;
const http = require("http");
const morgan = require("morgan");

// import routes
const {
  userRoutes,
  productRoutes,
  ordersRoutes,
  cartRoutes,
} = require("./routes/index");

// check node environment
if (NODE_ENV !== "production") {
  app.use(morgan("dev"));
}

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// routes
app.use("/api/v1", [userRoutes, productRoutes, ordersRoutes, cartRoutes]);

app.get("/", (req, res) => {
  res.status(200).json({ status: "success", data: "home routes" });
});

/**
 * start the server
 */
const server = http.createServer(app);
server.listen(PORT, () => {
  console.log(`\nlistening on port:${PORT}\n`);
});
