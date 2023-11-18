import React, { useContext } from "react";
import "./topbar.css";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
export default function Topbar() {
    const { user, dispatch } = useContext(Context);
    const handleLogout = (e) => {
        console.log("logging out")
        dispatch({ type: "LOGOUT" });
    };
    return ( <
        div className = "top" >
        <
        div className = "topLeft" >
        <
        i className = "topIcon fa-brands fa-square-facebook" > < /i>{" "} <
        i className = "topIcon fa-brands fa-square-twitter" > < /i>{" "} <
        i className = "topIcon fa-brands fa-square-pinterest" > < /i>{" "} <
        i className = "topIcon fa-brands fa-square-instagram" > < /i>{" "} < /
        div > { " " } <
        div className = "topCenter" >
        <
        ul className = "topList" >
        <
        li className = "topListItem" >
        <
        Link className = "link"
        to = "/" > { " " }
        HOME { " " } <
        /Link>{" "} < /
        li > { " " } <
        li className = "topListItem" >
        <
        Link className = "link"
        to = "/" > { " " }
        ABOUT { " " } <
        /Link>{" "} < /
        li > { " " } <
        li className = "topListItem" >
        <
        Link className = "link"
        to = "/" > { " " }
        CONTACT { " " } <
        /Link>{" "} < /
        li > { " " } <
        li className = "topListItem" >
        <
        Link className = "link"
        to = "/write" > { " " } { user && "WRITE" } { " " } <
        /Link>{" "} < /
        li > { " " } <
        li className = "topListItem"
        onClick = { handleLogout } > { user && "LOGOUT" } { " " } <
        /li>{" "} < /
        ul > { " " } <
        /div>{" "} <
        div className = "topRight" > { " " } {
            user ? (
                user.profilePicture ? ( <
                    img className = "topImg"
                    src = { user.profilePicture }
                    alt = "" / >
                ) : ( <
                    img className = "topImg"
                    src = "https://th.bing.com/th/id/R.8e2c571ff125b3531705198a15d3103c?rik=gzhbzBpXBa%2bxMA&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fuser-png-icon-big-image-png-2240.png&ehk=VeWsrun%2fvDy5QDv2Z6Xm8XnIMXyeaz2fhR3AgxlvxAc%3d&risl=&pid=ImgRaw&r=0"
                    alt = "" /
                    >
                )
            ) : ( <
                ul className = "topList" >
                <
                li className = "topListItem" > { " " } <
                Link className = "link"
                to = "/login" > { " " }
                LOGIN { " " } <
                /Link>{" "} < /
                li > { " " } <
                li className = "topListItem" > { " " } <
                Link className = "link"
                to = "/register" > { " " }
                REGISTER { " " } <
                /Link>{" "} < /
                li > { " " } <
                /ul>
            )
        } { " " } <
        i className = "searchIcon fa-solid fa-magnifying-glass" > < /i>{" "} < /
        div > { " " } <
        /div>
    );
}