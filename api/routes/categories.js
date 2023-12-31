const router = require("express").Router();
const Category = require("../models/Category");
const Post = require("../models/Post");

router.post("/", async(req, res) => {
    const newCat = new Category(req.body);
    try {
        const savedCat = await newCat.save();
        res.status(200).json(savedCat);
    } catch (error) {
        res.status(500).json(error);
    }
})

router.get("/", async(req, res) => {
    try {
        const Cats = await Category.find();
        res.status(200).json(Cats);
    } catch (error) {
        res.status(500).json(error);
    }
})



module.exports = router;