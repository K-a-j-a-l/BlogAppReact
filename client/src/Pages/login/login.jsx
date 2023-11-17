import { Link } from "react-router-dom";
import "./login.css";
import { useContext, useRef } from "react";
import { Context } from "../../context/Context"
import axios from "axios"
export default function Login() {
    const useref = useRef();
    const passref = useRef();
    const { user, dispatch, isFetching } = useContext(Context)
    const handleSubmit = async(e) => {
        e.preventDefault();
        dispatch({ type: "LOGIN_START" });
        try {
            const res = await axios.post("/auth/login", {
                username: useref.current.value,
                password: passref.current.value
            })
            dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
        } catch (err) {
            dispatch({ type: "LOGIN_FAILED" });
        }
    }
    console.log(user)
    return ( <
        div className = "login" >
        <
        span className = "loginTitle" > Login < /span>{" "} <
        form className = "loginForm"
        onSubmit = { handleSubmit } >
        <
        label > Username < /label>{" "} <
        input type = "text"
        placeholder = "Enter your username"
        ref = { useref }
        /> <
        label > Password < /label>{" "} <
        input type = "password"
        placeholder = "Enter your password"
        ref = { passref }
        /> <
        button className = "loginButton"
        type = "submit"
        disabled = { isFetching } > Login < /button>{" "} < /
        form > { " " } <
        button className = "loginRegisterButton" > { " " } <
        Link className = "link"
        to = "/register" > { " " }
        REGISTER { " " } <
        /Link> < /
        button > <
        /div>
    );
}