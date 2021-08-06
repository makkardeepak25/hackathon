const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const schoolSchema = new mongoose.Schema(
  {
    school_name: {
      type: String,
      required: true
    },
    gst_number: {
      type: Number,
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
    school_contact: {
      type: Number,
      required: true
    },
    school_address: {
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
    school_images: { type: Array, default: [] }
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
