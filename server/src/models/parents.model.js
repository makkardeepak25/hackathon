const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const parentSchema = new mongoose.Schema(
  {
    student_name: {
      type: String,
      required: true
    },
    guardian_name: {
      type: String,
      required: true
    },
    applying_standard: {
      type: Number,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    parent_contact: {
      type: Number,
      required: true
    },
    address: {
      type: String,
      required: true
    },
    parents_income: {
      type: Number,
      required: true
    },
    city: {
      type: String,
      required: true
    },
    parents_profession: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
);

parentSchema.pre("save", function(next) {
  if (!this.isModified("password")) return next();
  bcrypt.hash(this.password, 8, (err, hash) => {
    if (err) return next(err);
    this.password = hash;
    next();
  });
});

parentSchema.methods.checkPassword = function(password) {
  const userPassword = this.password;
  return new Promise((res, rej) => {
    bcrypt.compare(password, userPassword, (err, same) => {
      if (err) return rej(err);
      res(same);
    });
  });
};

const Parent = mongoose.model("parent", parentSchema);

module.exports = Parent;
