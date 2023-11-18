import React, { useContext } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Topbar from "./Components/topbar/topbar.jsx";
import Home from "./Pages/home/home.jsx";
import Single from "./Pages/single/single.jsx";
import Write from "./Pages/write/write.jsx";
import Settings from "./Pages/settings/settings.jsx";
import Login from "./Pages/login/login.jsx";
import Register from "./Pages/register/register.jsx";
import { Context } from "./context/Context.js";

function App() {
    const { user } = useContext(Context);
    return ( <
        Router >
        <
        Topbar / >
        <
        Routes > { " " } { /* Home Route */ } < Route exact path = "/"
        element = { < Home / > }
        />{" "} <
        Route path = "/register"
        element = { user ? < Home / > : < Register / > }
        />{" "} <
        Route path = "/login"
        element = { user ? < Home / > : < Login / > }
        />{" "} <
        Route path = "/post/:postId"
        element = { < Single / > }
        />{" "} <
        Route path = "/write"
        element = { user ? < Write / > : < Register / > }
        />{" "} <
        Route path = "/settings"
        element = { user ? < Settings / > : < Register / > }
        />{" "} < /
        Routes > { " " } <
        /Router>
    );
}

export default App;