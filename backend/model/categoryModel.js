import mongoose from "mongoose";

const categorySchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    name: {
      type: String,
      required: true,
      trim: true,
      maxlength: 50,
    },
    description: {
      type: String,
      maxlength: 200,
    },
    color: {
      type: String,
      default: "#3B82F6",
    },
    icon: {
      type: String,
      default: "💬", 
    },
    
    //for sorting
    order: {
      type: Number,
      default: 0, 
    },
  },
  { timestamps: true }
);


categorySchema.index({ user: 1, name: 1 }, { unique: true });

export default mongoose.model("Category", categorySchema);
