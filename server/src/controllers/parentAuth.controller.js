const jwt = require("jsonwebtoken")
require("dotenv").config()
const Parents = require("../models/parents.model")
const {validationResult} = require("express-validator")


const newToken = (parents) => {
    return jwt.sign({id: parents.id}, process.env.JWT_SECRETKEY)
}

const register = async(req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try{
        const parents = await Parents.create(req.body)
        const token = newToken(parents)
        return res.status(201).json({token: token})
    }catch(e){
        return res.status(500).json({status: "failed", message: "Something went wrong"})
    }
}
const signin = async (req, res) => {
    // console.log("fetching data")

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        // console.log("fetching data")

        const parents = await Parents.findOne({username: req.body.username})
        if(!artist){
            return res.status(401).json({status: "failed",message: "User doesnt exist. Kindly Register"})
        }
        const passwordMatch = await parents.checkPassword(req.body.password)
        if (!passwordMatch){
            return res.status(401).json({status: "failed",message: "Incorrect Pasword"})
        }
        const token = newToken(artist)

        //Now we need to fetch the artist data which has album as Reference
        return res.status(201).json({token: token, data: artist})
    } catch (e) {
        // console.log("fetching data err")

        return res.status(500).json({status: "failed",message: "Something went wrong."})
    }
}



module.exports = {
    register: register,
    signin: signin
}