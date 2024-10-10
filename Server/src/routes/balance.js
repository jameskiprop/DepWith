import express from "express";

const router = express.Router();

router.get("/:userId", (req, res) => {
  const { userId } = req.params;

  //fetching the user balance
  res.json({ message: "Your balance is:" });
});
//Route: POST
router.post("/update", (rep, res) => {
  const { userId, newBalance } = req.body;
  //Updating user balance logic here
  res.json({ message: "Balance updated", userId, newBalance });
});

export default router;
