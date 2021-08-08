const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const schoolSchema = new mongoose.Schema(
  {
    school_name: {
      type: String,
      required: true
    },
    gst_number: {
      type: String,
      required: true
    },
    max_standard: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true,
      select: false
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    annual_fee: {
      type: Number,
      required: true
    },
    phone_number: {
      type: Number,
      required: true
    },
    address: {
      type: String,
      required: true
    },
    teacher_student_ratio: {
      type: Number,
      required: true
    },
    city: {
      type: String,
      required: true
    },
    board: {
      type: String,
      required: true
    },
    role: {
      type: String,
      default:"school"
    },
    school_images: { type: String },
    reviewId: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "review"
    }]
  },
  {
    timestamps: true,
    versionKey: false
  }
);

schoolSchema.pre("save", function(next) {
  if (!this.isModified("password")) return next();
  bcrypt.hash(this.password, 8, (err, hash) => {
    if (err) return next(err);
    this.password = hash;
    next();
  });
});

schoolSchema.methods.checkPassword = function(password) {
  const userPassword = this.password;
  return new Promise((res, rej) => {
    bcrypt.compare(password, userPassword, (err, same) => {
      if (err) return rej(err);
      res(same);
    });
  });
};

const School = mongoose.model("school", schoolSchema);

module.exports = School;
