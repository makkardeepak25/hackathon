const jwt = require("jsonwebtoken")
require("dotenv").config()
const Parent = require("../models/parents.model")
const {validationResult} = require("express-validator")


const newToken = (parent) => {
    return jwt.sign({id: parent.id}, process.env.JWT_SECRETKEY)
}

const register = async(req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        const parent = await Parent.create(req.body)
        const token = newToken(parent)
        return res.status(201).json({token: token})
    }catch(e){
        return res.status(500).json({status: "failed", message: "Something went wrong"})
    }
}
const signin = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        const parent = await Parent.findOne({email: req.body.email})
        if(!parent){
            return res.status(401).json({status: "failed",message: "Parent doesnt exist. Kindly Register"})
        }
        const passwordMatch = await parent.checkPassword(req.body.password)
        if (!passwordMatch){
            return res.status(401).json({status: "failed",message: "Incorrect Pasword"})
        }
        const token = newToken(parent)
        return res.status(201).json({token: token, data: parent})
    } catch (e) {
        return res.status(500).json({status: "failed",message: "Something went wrong."})
    }
}

module.exports = {
    parentReg: register,
    parentSignin: signin
}