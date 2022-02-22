import React, { Component } from "react";
import Bg from "../src/assets/img/bg-1.jpg";
import Bg1 from "../src/assets/img/bg-2.jpg";
class Zoom extends Component {
  state = {
    size: 0,
  };

  handleScroll = (e) => {
    // e.persist();
    console.log(this.state.size);
    if (e.deltaY > 0 && this.state.size < 50) {
      this.setState({ size: this.state.size + 1 });
    } else if (e.deltaY < 0 && this.state.size > 0) {
      this.setState({ size: this.state.size - 1 });
    }
  };

  openAsModal = () => true;

  render = () => (
    <div style={{ width: "100%", display: "flex", margin: "auto" }}>
      {this.state.size < 30 && (
        <div
          style={{
            display: "flex",
            margin: "auto",
            height: 100 - this.state.size + "vh",
            width: 100 - this.state.size + "%",
            opacity: 1 - this.state.size * 0.03,
          }}
          onWheel={this.handleScroll}
        >
          <img src={Bg} style={{ width: "100%", height: "100% " }} alt="" />
        </div>
      )}
      {this.state.size >= 30 && (
        <div
          style={{ display: "flex", height: "100vh", width: "100%" }}
          onWheel={this.handleScroll}
        >
          <img src={Bg1} style={{ width: "100%", height: "100% " }} alt="" />
        </div>
      )}
    </div>
  );
}

export default Zoom;
