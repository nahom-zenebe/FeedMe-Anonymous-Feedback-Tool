import mongoose from "mongoose";

const feedbackSchema = new mongoose.Schema(
  {
    content: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Content",
      required: true,
    },
    

    message: {
      type: String,
      required: true,
      trim: true,
      maxlength: 1000,
    },

    rating: {
      type: Number,
      min: 1,
      max: 5,
    },
    fields: [
      {
        label: { type: String, required: true }, // e.g., "How would you rate this?"
        type: {
          type: String,
          enum: ["text", "textarea", "number", "rating", "checkbox", "radio", "select", "file", "date"],
          required: true,
        },
        value: mongoose.Schema.Types.Mixed, // string, number, boolean, array, file URL
        options: [String], // for radio, select, checkbox
        required: { type: Boolean, default: false },
        order: { type: Number, default: 0 }, // for display order
      },
    ],


    attachments: [
      {
        url: String,
        type: {
          type: String,
          enum: ["image", "file", "video", "audio"],
        },
      },
    ],

    ipAddress: String,
    userAgent: String,

    // Optional AI sentiment analysis
    sentiment: {
      type: String,
      enum: ["positive", "neutral", "negative"],
      default: "neutral",
    },

    // Status flags
    isRead: {
      type: Boolean,
      default: false,
    },
    isArchived: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Feedback", feedbackSchema);
