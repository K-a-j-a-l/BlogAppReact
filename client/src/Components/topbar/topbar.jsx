import React from 'react'
import "./topbar.css";
import { Link } from 'react-router-dom';
export default function topbar() {
    const user = false
    return ( <
        div className = "top" >
        <
        div className = "topLeft" >
        <
        i className = "topIcon fa-brands fa-square-facebook" > < /i> <
        i className = "topIcon fa-brands fa-square-twitter" > < /i> <
        i className = "topIcon fa-brands fa-square-pinterest" > < /i> <
        i className = "topIcon fa-brands fa-square-instagram" > < /i> <
        /div> <
        div className = "topCenter" >
        <
        ul className = "topList" >
        <
        li className = 'topListItem' >
        <
        Link className = "link"
        to = "/" > HOME < /Link> <
        /li> <
        li className = 'topListItem' >
        <
        Link className = "link"
        to = "/" > ABOUT < /Link> <
        /li> <
        li className = 'topListItem' >
        <
        Link className = "link"
        to = "/" > CONTACT < /Link> <
        /li> <
        li className = 'topListItem' >
        <
        Link className = "link"
        to = "/" > WRITE < /Link> <
        /li> <
        li className = 'topListItem' > { user && "LOGOUT" } < /li> <
        /ul> <
        /div> <
        div className = "topRight" > {
            user ? < img className = "topImg"
            src = "https://img.freepik.com/premium-vector/account-icon-user-icon-vector-graphics_292645-552.jpg"
            alt = "user" / >
            :
                <
                ul className = "topList" >
                <
                li className = 'topListItem' > < Link className = "link"
            to = "/login" > LOGIN < /Link></li >
            <
            li className = 'topListItem' > < Link className = "link"
            to = "/register" > REGISTER < /Link></li >
            <
            /ul>
        }

        <
        i class = "searchIcon fa-solid fa-magnifying-glass" > < /i> <
        /div>

        <
        /div>
    )
}