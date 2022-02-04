import React from "react";
import propTypes from "prop-types";
import { Link } from "react-router-dom";
import { ChatIcon } from "@heroicons/react/outline";

function Photo(props) {
  const post = props.post;
  return (
    <figure className="figure">
      <Link to={`/post/${post.id}`}>
        <img className="photo" src={post.imageLink} alt={post.description} />
      </Link>
      <figcaption>
        <p>{post.description}</p>
      </figcaption>
      <div className="button-container">
        <button
          className="remove-button"
          onClick={() => {
            props.removePost(props.index);
            props.history.push("/");
          }}
        >
          Remove
        </button>
        <Link className="button" to={`/post/${post.id}`}>
          <div className="comment-count">
            <ChatIcon className="speech-bubble" />
            {props.comments[post.id] ? props.comments[post.id].length : 0}
          </div>
        </Link>
      </div>
    </figure>
  );
}

Photo.propTypes = {
  post: propTypes.object.isRequired,
};

export default Photo;
