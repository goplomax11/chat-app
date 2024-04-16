import mongoose from "mongoose";

const conversationSchema = mongoose.Schema(
  {
    participants: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "User",
      required: true,
    },
    messages: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "Message",
      required: true,
      default: [],
    },
  },
  { timestamps: true }
);

const Conversation = mongoose.Model("Conversation", conversationSchema);

export default Conversation;
