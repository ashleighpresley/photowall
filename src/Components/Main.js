import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import AddPhoto from "./AddPhoto";
import Photowall from "./PhotoWall";
import SinglePhoto from "./SinglePhoto";

class Main extends Component {
  state = { loading: true };

  componentDidMount() {
    this.props.startLoadingPost().then(() => {
      this.setState({ loading: false });
    });
    this.props.startLoadingComment();
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
          render={(params) => (
            <SinglePhoto
              loading={this.state.loading}
              {...this.props}
              {...params}
            />
          )}
        />
      </div>
    );
  }
}

export default Main;
