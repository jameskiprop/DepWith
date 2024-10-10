import express from "express";
import dotenv from "dotenv";
import connectDB from "./database/connect-database.js";
import authRoutes from "./routes/auth.js";
import balanceRoutes from "./routes/balance.js";
import transactionRoutes from "./routes/transaction.js";
// import mongoose from "mongoose";

dotenv.configDotenv();

connectDB();

const app = express();

//Middlewear that will parse JSON
app.use(express.json());

// Routes
app.use("/auth", authRoutes); // Auth routes
app.use("/balance", balanceRoutes); // Balance routes
app.use("/transaction", transactionRoutes); // Transaction routes

app.get("/", (req, res) => {
  console.log("Request received on root path");
  // res.send("Hello World from the server runnning from Kiprop's Machine");
  res.json({ message: "Silence is Golden" });
});

app.listen(3005, () => {
  console.log("Server is running on PORT 3005");
});

//Routes server
