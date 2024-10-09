import express from "express";
import dotenv from "dotenv";
import connectDB from "./database/connect-database.js";

dotenv.configDotenv();

connectDB();

const app = express();

app.get("/", (req, res) => {
  console.log("Request received on root path");
  // res.send("Hello World from the server runnning from Kiprop's Machine");
  res.json({ message: "Silence is Golden" });
});

app.listen(3005, () => {
  console.log("Server is running on PORT 3005");
});
