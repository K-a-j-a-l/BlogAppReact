import "./home.css";
import Header from "../../Components/header/header.jsx";
import Posts from "../../Components/posts/posts.jsx";
import Sidebar from "../../Components/sidebar/sidebar.jsx";
import { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

export default function Home() {
    const [posts, setPosts] = useState([]);
    const { search } = useLocation();

    useEffect(() => {
        const fetchPosts = async() => {
            const res = await axios.get("/posts" + search);
            setPosts(res.data);
        };
        fetchPosts();
    }, [search]);
    return ( <
        >
        <
        Header / >
        <
        div className = "home" >
        <
        Posts posts = { posts }
        /> <Sidebar / >
        <
        /div>{" "} <
        />
    );
}