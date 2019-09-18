import React, { PureComponent } from "react";
import reactBound from "../../index";

import "./sass/style.sass";

let Image = reactBound.img();

let count = 0;

class App extends PureComponent {
  state = {
    imgCl: "",
    circleCl: "circle"
  };

  boxRef = null;
  BoundCircle = null;

  componentDidMount() {
    if (this.boxRef) this.BoundCircle = reactBound.div({ root: this.boxRef });
    setInterval(() => this.handleAnimation(), 2000);
  }

  handleAnimation = () => {
    if (this.state.circleCl === "circle")
      this.setState({ circleCl: "circle move" });
    else this.setState({ circleCl: "circle" });
  };

  componentDidUpdate() {
    console.log("update", ++count);
  }

  handleImage = (el, enter) => {
    console.log(enter);
    if (enter) console.log("handleImage enter");
    else console.log("handleImage leave");

    if (enter) this.setState({ imgCl: "op" });
    else this.setState({ imgCl: "" });
  };

  handleEnter = (el, enter) => {
    if (enter) {
      el.style.backgroundColor = "#ffae00";
    } else {
      el.style.backgroundColor = "lightgray";
    }
  };

  render() {
    const {
      state: { imgCl, circleCl },
      BoundCircle
    } = this;

    return (
      <div className="content">
        <section className="mySection-1"></section>
        <section className="mySection-2">
          <Image
            src={
              "https://data1.origin.com/asset/content/dam/originx/web/app/games/apex/apex/F2P/screenshots/R5_World_Airbase_01_v02.jpg/9d19d978-2a2b-458c-afa4-86d9241704f4/original.jpg"
            }
            onEnter={this.handleImage}
            onLeave={this.handleImage}
            className={imgCl}
          />
          <br />
          <br />
          <p>Hi</p>
          <br />
          <div className="box" ref={el => (this.boxRef = el)}>
            {BoundCircle && (
              <BoundCircle
                onEnter={this.handleEnter}
                onLeave={this.handleEnter}
                className={circleCl}
              />
            )}
          </div>
        </section>
      </div>
    );
  }
}

export default App;
