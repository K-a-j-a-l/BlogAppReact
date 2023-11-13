import "./settings.css"
import Sidebar from "../../Components/sidebar/sidebar.jsx"

export default function settings() {
    return ( <
        div className = "settings" >
        <
        div className = "settingsWrapper" >
        <
        div className = "settingsTitle" >
        <
        span className = "settingsUpdateTitle" > Update Your Account < /span> <
        span className = "settingsDeleteTitle" > Delete Account < /span> <
        /div> <
        form className = "settingsForm" >
        <
        label > Profile Picture < /label> <
        div className = "settingsPP" >
        <
        img src = "https://img.freepik.com/premium-vector/account-icon-user-icon-vector-graphics_292645-552.jpg"
        alt = "" / >
        <
        label htmlFor = "fileInput" > < i className = "settingsPPIcon fa-regular fa-circle-user" > < /i></label >
        <
        input type = "file"
        id = "fileInput"
        style = {
            { display: "none" } }
        /> <
        /div> <
        label > User Name < /label> <
        input type = "text"
        placeholder = "name" / >
        <
        label > Email < /label> <
        input type = "email"
        placeholder = "name@gmail.com" / >
        <
        label > Password < /label> <
        input type = "password" / >
        <
        button className = "settingsSubmit" > Update < /button> <
        /form> <
        /div> <
        Sidebar / >
        <
        /div>
    )
}