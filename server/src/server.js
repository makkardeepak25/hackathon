const express = require("express");
const connect = require("./config/db");
const cors = require("cors");
const app = express();
// const schoolController = require("./controllers/schools.controller")
const { schoolReg, schoolSignin,schoolController } = require("./controllers/schoolAuth.controller")
const { parentReg, parentSignin } = require("./controllers/parentAuth.controller")
const reviewController  = require("./controllers/review.controller")


app.use(cors());
app.use(express.json());

app.use("/schools", schoolController);
app.post("/school/register", schoolReg)
app.post("/school/signin", schoolSignin)
app.post("/parent/register", parentReg)
app.post("/parent/signin", parentSignin)
app.use("/review", reviewController)



const start = async () => {
	try {
		await connect();
		app.listen(8000, () => {
			console.log("Listening on port 8000");
		});
	} catch (e) {
		console.log(e);
	}
};

module.exports = start;
