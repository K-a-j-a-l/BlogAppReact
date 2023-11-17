import { Link } from "react-router-dom";
import "./register.css";
import { useState } from "react";
import axios from "axios";

export default function Register() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleSubmit = async(e) => {
        e.preventDefault();
        const res = await axios.post("/auth/register", {
            username,
            email,
            password,
        });
        res.data && window.location.replace("/login")
    };
    return ( <
        div className = "register" >
        <
        span className = "registerTitle" > Register < /span>{" "} <
        form className = "registerForm"
        onSubmit = { handleSubmit } >
        <
        label > Username < /label>{" "} <
        input type = "text"
        placeholder = "Enter your name"
        onChange = {
            (e) => {
                setUsername(e.target.value);
            }
        }
        />{" "} <
        label > Email < /label>{" "} <
        input type = "text"
        placeholder = "Enter your email"
        onChange = {
            (e) => {
                setEmail(e.target.value);
            }
        }
        />{" "} <
        label > Password < /label>{" "} <
        input type = "password"
        placeholder = "Enter your password"
        onChange = {
            (e) => {
                setPassword(e.target.value);
            }
        }
        />{" "} <
        button className = "registerButton" > Register < /button>{" "} <
        /form>{" "} <
        button className = "registerLoginButton" > { " " } <
        Link className = "link"
        to = "/login" > { " " }
        LOGIN { " " } <
        /Link>{" "} <
        /button>{" "} <
        /div>
    );
}