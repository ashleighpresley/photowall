import React, { Component } from "react";
import Title from "./Title";
import Photowall from "./PhotoWall";
import AddPhoto from "./AddPhoto";
import SinglePhoto from "./SinglePhoto";
import { Route } from "react-router-dom";
import { removePost } from "../redux/actions";
import { Link } from "react-router-dom";

class Main extends Component {
  componentDidMount() {
    this.props.startLoadingPost();
  }
  render() {
    return (
      <div>
        <h1>
          <Link to="/">Photowall</Link>
        </h1>
        <Route
          exact
          path="/"
          render={() => (
            <div>
              <Photowall {...this.props} />
            </div>
          )}
        />
        <Route
          path="/AddPhoto"
          render={({ history }) => <AddPhoto {...this.props} />}
        />
        <Route
          path="/post/:id"
          render={(params) => <SinglePhoto {...this.props} {...params} />}
        />
      </div>
    );
  }
}

export default Main;
