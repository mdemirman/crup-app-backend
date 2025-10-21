import express from "express";

import mongoose from "mongoose";

import productRoute from "./routes/product.route.js";
const app = express();

app.use(express.json()); // middleware to parse json data
app.use(express.urlencoded({ extended: false })); // middleware to parse url encoded data

// Routes
app.use("/api/products", productRoute);

app.get("/", (req, res) => {
  res.send("Hello from Node API Server Updated");
});

// Mongoose connection
mongoose
  .connect(
    "USE MONGODB CONNECTION STRING"
  )
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })

  .catch((err) => {
    console.log("Connection failed!");
  });
