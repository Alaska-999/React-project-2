import React from "react";
import MyButton from "./UI/button/MyButton";
import { Link } from "react-router-dom";

const PostItem = (props) => {
  return (
    <div>
      <div className="post">
        <div className="post__content">
          <strong>
            {props.post.id}.{props.post.title}
          </strong>
          <div>{props.post.body}</div>
        </div>
        <div className="post__btns">
          <Link to={`/posts/${props.post.id}`}>
            <MyButton>Open</MyButton>
          </Link>
          <MyButton onClick={() => props.remove(props.post)}>Delete</MyButton>
        </div>
      </div>
    </div>
  );
};

export default PostItem;
