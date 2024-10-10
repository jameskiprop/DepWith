import express from "express";

const router = express.Router();

//Route GET

router.get("/:userId", (req, res) => {
  const { userId } = req.params;

  //fetching user transaction logic
  res.json({ userId, transactions: ["Transaction 1", "Transaction 2"] });
});

router.post("/create", (req, res) => {
  const { userId, amount } = req.body;

  //creating the transaction logic
  res.json({ message: "Transaction created", userId, amount });
});

export default router;
