import { Link } from "react-router-dom";
import "./post.css";

export default function post({ post }) {
    const pp = "http://localhost:5000/images/";
    console.log(pp + post.photo)
    return ( <
        div className = "post" >
        <
        Link className = "link"
        to = { `/post/${post._id}` } > { " " } { post.photo && < img className = "postImg"
            src = { pp + post.photo }
            alt = "" / > } <
        div className = "postInfo" >
        <
        div className = "postCats" > { " " } {
            /* {post.categories.map((c) => { 
                                      return  <span className = "postCat" > { c.name } </span>;
                                    })} */
        } { " " } <
        /div>{" "} <
        span className = "postTitle" > { post.title } < /span> <hr / >
        <
        span className = "postDate" > { " " } { new Date(post.createdAt).toDateString() } { " " } <
        /span>{" "} <
        /div>{" "} <
        p className = "postDesc" > { post.desc } < /p>{" "} <
        /Link>{" "} <
        /div>
    );
}