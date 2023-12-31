const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");

router.post("/register", async(req, res) => {
    try {
        const Salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(req.body.password, Salt)
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword,
        })
        const user = await newUser.save();
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json(error);
    }
})

router.post("/login", async(req, res) => {
    try {
        const user = await User.findOne({ username: req.body.username })
        if (!user) {
            res.status(400).json("wrong credentials")
        }
        const validatePass = await bcrypt.compare(req.body.password, user.password)
        if (!validatePass) {
            res.status(400).json("wrong credentials")
        }
        const { password, ...others } = user._doc;
        res.status(200).json(others);
    } catch (error) {
        res.status(500).json(error);
    }
})

module.exports = router