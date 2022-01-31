import React, { Component } from "react";
import List from "./List";
import Title from "./Title";

class Main extends Component {
  render() {
    return (
      <div>
        <Title title={"To Do"} />
        <List tasks={["Mow the lawn", "Walk the dog"]} />
        <List tasks={["Fold laundry", "Wash dishes"]} />
      </div>
    );
  }
}

export default Main;
