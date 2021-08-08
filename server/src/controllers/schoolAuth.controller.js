const express = require("express");
const School = require("../models/school.model");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const { validationResult } = require("express-validator");
const router = express.Router();

const newToken = school => {
  return jwt.sign({ id: school.id }, process.env.JWT_SECRETKEY);
};
router.get("/", async function(req, res) {
  const schools = await School.find({})
    .lean()
    .exec();
  return res.status(200).json({ data: schools });
});
router.get("/:id", async (req, res) => {
    try {
        const filter = { _id: req.params.id };
        const school = await School.findOne(filter).lean().exec();
        if (!school) {
            return res.status(404).json({ data: "Not Found" })
        }
        return res.status(201).json({ data: school })
    }catch(err){
        return res.status(500).send("Internal Error Happened")
    }

})

const register = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const school = await School.create(req.body);
      const token = newToken(school);
      console.log(school)
    return res.status(201).json({ token: token });
  } catch (e) {
    return res.status(500).json({ status: "failed", message: "Something went wrong" });
  }
};
const signin = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const school = await School.findOne({ email: req.body.email }).select("+password");
    if (!school) {
      return res.status(401).json({ status: "failed", message: "School doesnt exist. Kindly Register" });
    }
    const passwordMatch = await school.checkPassword(req.body.password);
    if (!passwordMatch) {
      return res.status(401).json({ status: "failed", message: "Incorrect Pasword" });
    }
    const token = newToken(school);

    return res.status(201).json({ token: token, data: school });
  } catch (e) {
    return res.status(500).json({ status: "failed", message: "Something went wrong." });
  }
};

module.exports = {
  schoolReg: register,
  schoolSignin: signin,
  schoolController: router
};
