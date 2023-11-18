import { useContext, useEffect, useState } from "react";
import "./singlepost.css";
import { useLocation } from "react-router";
import axios from "axios";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";

export default function Singlepost() {
    const user = useContext(Context);
    const pp = "http://localhost:5000/images/";
    const location = useLocation();
    const path = location.pathname.split("/")[2];
    const [post, setPost] = useState([]);
    const isAuthor =
        Object.keys(post).length !== 0 &&
        user &&
        user.username &&
        user.username === post.username;

    useEffect(() => {
        const getPost = async() => {
            const res = await axios.get("/posts/" + path);
            setPost(res.data);
        };
        getPost();
    }, [path, user]);

    return ( <
        div className = "singlePost" >
        <
        div className = "singlePostWrapper" > { " " } {
            post.photo && ( <
                img src = { pp + post.photo }
                alt = ""
                className = "singlePostImg" / >
            )
        } { " " } <
        h1 className = "singlePostTitle" > { " " } { post.title } { " " } {
            isAuthor && ( <
                div className = "singlePostEdit" >
                <
                i className = "singlePostIcon far fa-edit" > < /i>{" "} <
                i className = "singlePostIcon far fa-trash" > < /i>{" "} < /
                div >
            )
        } { " " } <
        /h1>{" "} <
        div className = "singlePostInfo" >
        <
        span className = "singlePostAuthor" >
        Author:
        <
        Link to = { `/?username=${post.username}` }
        className = "link" >
        <
        b > { post.username } < /b>{" "} < /
        Link > { " " } <
        /span>{" "} <
        span className = "singlePostDate" > { " " } { new Date(post.createdAt).toDateString() } { " " } <
        /span>{" "} < /
        div > { " " } <
        p className = "singlePostDesc" > { post.desc } < /p>{" "} < /
        div > { " " } <
        /div>
    );
}