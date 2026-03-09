import mongoose from "mongoose";

const blacklistSchema = new mongoose.Schema(
  {
    token: {
      type: String,
      required: [true, "Token is required to be added to the blacklist"],
    },
  },
  { timestamps: true },
);

const TokenBlacklist = mongoose.model("TokenBlacklist", blacklistSchema);

export default TokenBlacklist;
