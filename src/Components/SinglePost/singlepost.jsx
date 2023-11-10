import "./singlepost.css"

export default function singlepost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIJyAysig1f5wB6lo28tpQI9cBxizV1KwZSBm98THuWA&s" alt="" className="singlePostImg" />
        <h1 className="singlePostTitle">
            Lorem Ipsum
            <div className="singlePostEdit">
                <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
                <i className="singlePostIcon fa-solid fa-trash"></i>
            </div>
        </h1>
        <div className="singlePostInfo">
            <span className="singlePostAuthor">Author: <b>Name</b></span>
            <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDesc">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas ut adipisci alias a deleniti, necessitatibus sapiente laborum voluptates repellendus consectetur magni optio consequatur itaque? Iste modi deserunt tenetur quis reiciendis?
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas ut adipisci alias a deleniti, necessitatibus sapiente laborum voluptates repellendus consectetur magni optio consequatur itaque? Iste modi deserunt tenetur quis reiciendis?
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas ut adipisci alias a deleniti, necessitatibus sapiente laborum voluptates repellendus consectetur magni optio consequatur itaque? Iste modi deserunt tenetur quis reiciendis?
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas ut adipisci alias a deleniti, necessitatibus sapiente laborum voluptates repellendus consectetur magni optio consequatur itaque? Iste modi deserunt tenetur quis reiciendis?
        </p>
      </div>
    </div>
  )
}
