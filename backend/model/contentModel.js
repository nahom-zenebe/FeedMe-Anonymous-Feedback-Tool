import mongoose from "mongoose";

const contentSchema = new mongoose.Schema(
  {
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    title: {
      type: String,
      required: true,
      trim: true,
      maxlength: 150,
    },
    description: {
      type: String,
      maxlength: 500,
    },
    type: {
      type: String,
      enum: ["text", "image", "video", "file", "link", "other"],
      default: "text",
    },
    mediaUrl: {
      type: String, //for image/video
    },
    fileType: {
      type: String, // e.g., "pdf", "jpg", "mp4"
    },
    tags: [
      {
        type: String,
        trim: true,
        lowercase: true,
      },
    ],
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
    },
    slug: {
      type: String,
      unique: true,
      required: true, // for shareable link e.g. feedme.vercel.app/c/design-demo
    },
    allowFeedback: {
      type: Boolean,
      default: true,
    },
    feedbackCount: {
      type: Number,
      default: 0,
    },
    visibility: {
      type: String,
      enum: ["public", "private", "unlisted"],
      default: "public",
    },
    meta: {
      views: { type: Number, default: 0 },
      likes: { type: Number, default: 0 },
      shares: { type: Number, default: 0 },
    },
  },
  { timestamps: true }
);

export default mongoose.model("Content", contentSchema);
