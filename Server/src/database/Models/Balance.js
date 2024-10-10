import { model, Schema } from "mongoose";

const balanceSchema = new Schema(
  {
    balance_id: {
      type: string,
      required: true,
      unique: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    balance: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const Balance = model("Balance", balanceSchema);

export { Balance };
