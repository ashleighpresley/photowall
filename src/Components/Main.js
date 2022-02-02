import React, { Component } from "react";
import Title from "./Title";
import Photowall from "./PhotoWall";
import AddPhoto from "./AddPhoto";

class Main extends Component {
  constructor() {
    super();
    this.state = {
      posts: [
        {
          id: "0",
          description: "beautiful landscape",
          imageLink:
            "https://image.jimcdn.com/app/cms/image/transf/none/path/sa6549607c78f5c11/image/i4eeacaa2dbf12d6d/version/1490299332/most-beautiful-landscapes-in-europe-lofoten-european-best-destinations-copyright-iakov-kalinin.jpg" +
            "3919321_1443393332_n.jpg",
        },
        {
          id: "1",
          description: "Aliens???",
          imageLink:
            "https://s3.india.com/wp-content/uploads/2017/12/rocket.jpg",
        },
        {
          id: "2",
          description: "On a vacation!",
          imageLink:
            "https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2017/08/24/104670887-VacationExplainsTHUMBWEB.1910x1000.jpg",
        },
      ],
      screen: "photos",
    };
    //because these methods (removePhoto and navigate) are a part of an event handler, the this binding has been lost such that it is then in the context of a function, which is nill by default. So to fix this you can bind the this keyword to your component instance like so:
    this.removePhoto = this.removePhoto.bind(this);
    this.navigate = this.navigate.bind(this);
  }

  removePhoto(postRemoved) {
    this.setState((state) => ({
      posts: state.posts.filter((post) => post !== postRemoved),
    }));
  }

  navigate() {
    this.setState({
      screen: "addPhoto",
    });
  }

  //if state=photos, the title and photowall componenets will be returned, or if state=addPhoto then the addPhoto componenets will be returned
  render() {
    return (
      <div>
        {this.state.screen === "photos" && (
          <div>
            <Title title={"Photowall"} />
            <Photowall
              posts={this.state.posts}
              onRemovePhoto={this.removePhoto}
              onNavigate={this.navigate}
            />
          </div>
        )}
        {this.state.screen === "addPhoto" && (
          <div>
            <AddPhoto />
          </div>
        )}
      </div>
    );
  }
}

export default Main;
