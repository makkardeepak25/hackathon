const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const parentsSchema = new mongoose.Schema(
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
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    student_email: {
      type: String,
      required: true
    },
    parent_contact: {
      type: String,
      required: true
    },
    parent_address: {
      type: String,
      required: true
    },
    parent_city: {
      type: String,
      required: true
    },
    parent_qualification: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
);

parentsSchema.pre("save", function(next) {
  if (!this.isModified("password")) return next();
  bcrypt.hash(this.password, 8, (err, hash) => {
    if (err) return next(err);
    this.password = hash;
    next();
  });
});

parentsSchema.methods.checkPassword = function(password) {
  const userPassword = this.password;
  return new Promise((res, rej) => {
    bcrypt.compare(password, userPassword, (err, same) => {
      if (err) return rej(err);
      res(same);
    });
  });
};

const Parents = mongoose.model("parents", parentsSchema);

module.exports = Parents;
