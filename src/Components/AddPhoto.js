import React, { Component } from "react";

class AddPhoto extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const imageLink = e.target.elements.link.value;
    const imageCaption = e.target.elements.caption.value;
    const post = {
      id: Number(new Date()),
      description: imageCaption,
      imageLink: imageLink,
    };
    if (imageCaption && imageLink) {
      this.props.onAddPhoto(post);
    }
  }

  render() {
    return (
      <div>
        <h1>Photowall</h1>
        <div className="form">
          <form onSubmit={this.handleSubmit}>
            <input type="text" placeholder="Link" name="link" />
            <input type="text" placeholder="Caption" name="caption" />
            <button className="post-button">Post</button>
          </form>
        </div>
      </div>
    );
  }
}

export default AddPhoto;
