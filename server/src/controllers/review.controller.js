const express = require("express");
const Review = require("./../models/reviews.model");
const School = require("../models/school.model");
const router = express.Router();

router.post("/", async (req, res) => {
    var reviewData = await Review.create(req.body)
    return res.status(201).json({data:reviewData})
})

router.get("/:schoolId/reviews", async (req, res) => {
    let schoolId = req.params.schoolId;
    let reviews = await Review.find({ "schoolId": schoolId }).populate("parentId").lean().exec();
    return res.status(200).json({data:reviews})
})
router.get("/:schooldId/reviews/ratings", async (req, res) => {
    let schoolId = req.params.schoolId;
    let ratings = await Review.find({ "schoolId": schoolId },"rating").lean().exec();
    return res.status(200).json({data:ratings})
})
module.exports = router;