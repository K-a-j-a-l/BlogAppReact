import "./posts.css";
import POST from "../post/post.jsx";
export default function posts({ posts }) {
    return ( <
        div className = "posts" > {
            posts.map((p) => {
                return <POST post = { p }
                />;
            })
        } <
        /div>
    );
}