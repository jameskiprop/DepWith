import { model, Schema } from "mongoose";

const transactionSchema = new Schema(
  {
    transaction_id: {
      type: string,
      required: true,
      unique: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    balance: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true } //createdAt & UpdatedAt
);
const Transaction = model("Transaction", transactionSchema);

export { Transaction };
