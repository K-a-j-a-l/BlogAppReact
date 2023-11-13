const express = require("express");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const usersRoute = require("./routes/users");
const postsRoute = require("./routes/posts");
const categoryRoute = require("./routes/categories");
const multer = require("multer");
const app = express();
mongoose.connect("mongodb://localhost:27017/blogReact").then(() => console.log("mongodb connected"));

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "images")
    },
    fileName: (req, file, cb) => {
        cb(null, req.body.name)
    }
})

const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
    res.status(200).json("File has been uploaded")
})

app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/posts", postsRoute);
app.use("/api/categories", categoryRoute);
app.listen("5000", () => {
    console.log("server connected");
})