import express from "express";

const router = express.Router();

router.post("/login", (req, res) => {
  res.json({ message: "Successful login" });
});

export default router;
