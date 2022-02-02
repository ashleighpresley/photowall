import React from "react";
import Photo from "./Photo";
import propTypes from "prop-types";

function Photowall(props) {
  return (
    <div>
      <a className="addIcon" onClick={props.onNavigate} href="#AddPhoto"></a>
      <div className="photo-grid">
        {props.posts.map((post, index) => (
          <Photo key={index} post={post} onRemovePhoto={props.onRemovePhoto} />
        ))}
      </div>
    </div>
  );
}

Photowall.propTypes = {
  posts: propTypes.array.isRequired,
  onRemovePhoto: propTypes.func.isRequired,
};

export default Photowall;
