import { useEffect, useState } from "react";
import "./sidebar.css";
import axios from "axios";
import { Link } from "react-router-dom";
export default function Sidebar() {
    const [cats, setCats] = useState([]);
    useEffect(() => {
        const getCats = async() => {
            const res = await axios.get("/categories");
            setCats(res.data);
        };
        getCats();
    });
    return ( <
        div className = "sidebar" >
        <
        div className = "sidebarItem" >
        <
        span className = "sidebarTitle" > ABOUT ME < /span>{" "} <
        img className = ""
        src = "https://png.pngtree.com/thumb_back/fh260/background/20210101/pngtree-double-row-tree-path-with-yellow-deciduous-autumn-leaves-image_519106.jpg"
        alt = "" /
        >
        <
        p >
        Lorem ipsum dolor sit amet consectetur adipisicing elit.Porro magni, { " " } <
        /p>{" "} <
        /div>{" "} <
        div className = "side" >
        <
        span className = "sidebarTitle" > CATEGORIES < /span>{" "} <
        ul className = "sidebarList" > {
            cats.map((c) => ( <
                Link to = { `/?cat=${c.name}` }
                className = "link"
                key = { c._id } >
                <
                li className = "sidebarListItem" > { c.name } < /li> <
                /Link>
            ))
        } <
        /ul>

        <
        /div>{" "} <
        div className = "sidebarItem" >
        <
        span className = "sidebarTitle" > FOLLOW US < /span>{" "} <
        div className = "sidebarSocial" >
        <
        i className = "SidebarIcon fa-brands fa-square-facebook" > < /i>{" "} <
        i className = "SidebarIcon fa-brands fa-square-twitter" > < /i>{" "} <
        i className = "SidebarIcon fa-brands fa-square-pinterest" > < /i>{" "} <
        i className = "SidebarIcon fa-brands fa-square-instagram" > < /i>{" "} <
        /div>{" "} <
        /div>{" "} <
        /div>
    );
}