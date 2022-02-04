import React, { Component } from "react";

class Comments extends Component {
  render() {
    return (
      <div className="comment">
        <form className="comment-form">
          <input type="text" placeholder="comment"></input>
          <input className="comment-submit" type="submit"></input>
        </form>
      </div>
    );
  }
}

export default Comments;
