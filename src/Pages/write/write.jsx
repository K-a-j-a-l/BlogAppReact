import "./write.css"

export default function write() {
    return ( <
        div className = "write" >
        <
        img className = "writeImg"
        src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIJyAysig1f5wB6lo28tpQI9cBxizV1KwZSBm98THuWA&s"
        alt = "" / >
        <
        form className = "writeForm" >
        <
        div className = "writeFormGroup" >
        <
        label htmlFor = "fileInput" > < i class = "writeIcon fa-solid fa-plus" > < /i></label >
        <
        input type = "file"
        id = "fileInput"
        style = {
            { display: "none" } }
        /> <
        input type = "text"
        placeholder = "Enter the Title"
        className = "writeInput"
        autoFocus = { true }
        /> <
        /div> <
        div className = "writeFormGroup" >
        <
        textarea type = "text"
        placeholder = "Enter the Title"
        className = "writeInput writeText" > < /textarea> <
        /div> <
        button className = "writeSubmit" > Publish < /button> <
        /form> <
        /div>
    )
}