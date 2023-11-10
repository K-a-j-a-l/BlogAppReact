import "./register.css"

export default function register() {
    return ( <
        div className = "register" >
        <
        span className = "registerTitle" >
        Register <
        /span> <
        form className = "registerForm" >
        <
        label > Username < /label> <
        input type = "text"
        placeholder = "Enter your name" / >
        <
        label > Email < /label> <
        input type = "text"
        placeholder = "Enter your email" / >
        <
        label > Password < /label> <
        input type = "password"
        placeholder = "Enter your password" / >
        <
        button className = "registerButton" > Register < /button> <
        /form> <
        button className = "registerLoginButton" > Login < /button> <
        /div>
    )
}