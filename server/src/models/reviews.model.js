const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },
    body: {
      type: String,
      required: true
    },
    rating: {
      type: Number,
      required: true
    },
    parentId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "parent"
    },
    schoolId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "school"
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
);

const Review = mongoose.model("review", reviewSchema);

module.exports = Review;
