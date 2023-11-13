const router = require("express").Router();
const Post = require("../models/Post");

router.post("/", async(req, res) => {
    const newPost = new Post(req.body);
    try {
        const savedPost = await newPost.save();
        res.status(200).json(savedPost);
    } catch (error) {
        res.status(500).json(error);
    }
})

router.delete("/:id", async(req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (!post) {
            return res.status(404).json("Post not found");
        }
        if (post.username === req.body.username) {
            try {
                await Post.findByIdAndDelete(req.params.id);
                return res.status(200).json("Post deleted");
            } catch (error) {
                return res.status(500).json(error);
            }
        } else {
            return res.status(401).json("You can't delete this post");
        }
    } catch (error) {
        return res.status(500).json(error);
    }
});


router.put("/:id", async(req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (post.username === req.body.username) {
            try {
                const updatedPost = await Post.findByIdAndUpdate(req.params.id, {
                    $set: req.body
                }, { new: true })
                res.status(200).json(updatedPost);

            } catch (error) {
                res.status(500).json(error);
            }
        } else {
            res.status(401).json("You can't update this post");
        }
    } catch (error) {
        res.status(500).json(error);
    }
})


router.get("/:id", async(req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        res.status(200).json(post);
    } catch (error) {
        res.status(500).json(error);
    }
})

router.get("/", async(req, res) => {
    const username = req.query.user;
    const category = req.query.cat;
    try {
        let posts;
        if (username) {
            posts = await Post.find({ username })
        } else if (category) {
            posts = await Post.find({
                categories: {
                    $in: { category }
                }
            })
        } else {
            posts = await Post.find();
        }
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json(error);
    }
})


module.exports = router