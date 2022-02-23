import React, { Component, useCallback } from "react";
import Bg from "../src/assets/img/1.gif";
import Bg1 from "../src/assets/img/bg-2.gif";
import Bg3 from "../src/assets/img/bg-3.jpg";
import Bg4 from "../src/assets/img/bg-4.jpg"
import whatsappImg from "../src/assets/img/whatsapp.png";
import linkedImg from "../src/assets/img/linkedin.png";
import youtubeImg from "../src/assets/img/youtube.png";
import facebookImg from "../src/assets/img/facebook.png";
import logoImg from "../src/assets/img/logo.gif";

class Zoom extends Component {
  state = {
    size: 0,
    images:[],
    firstLoad:false,
    topDelta:[],
    rightDelta:[]
  };
  componentDidMount() {
    const images = this.importAll(require.context('./assets/img/ele', false, /\.png/))
    const temp = Object.values(images)
    const tempTop = [];
    const tempRight = [];
    for (var i = 0; i < temp.length; i++) {
      tempTop.push(this.getRandomInt(90))
      tempRight.push(this.getRandomInt(90))
    }
    this.setState({images:temp, topDelta:tempTop, rightDelta:tempRight});
    console.log("----")
  }

  handleScroll = (e) => {
    // e.persist();
    console.log(this.state.size);
    if (e.deltaY > 0 && this.state.size < 100) {
      this.setState({ size: this.state.size + 1 });
    } else if (e.deltaY < 0 && this.state.size > 0) {
      this.setState({ size: this.state.size - 1 });
    }
  };

  openAsModal = () => true;

  getRandomInt = (max) => {
    console.log("--")
    return Math.floor(Math.random() * max);
  };

  importAll(r) {
    let images = {};
    r.keys().map((item) => {
      images[item.replace("./", "")] = r(item);
    });
    return images;
  }
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
      {this.state.size >= 30 && this.state.size<50 && (
        <div className="normal-bg" onWheel={this.handleScroll}>
          <img
            src={Bg1}
            style={{ width: "100%", height: "100% " }}
            alt=""
          />
          {
            this.state.images.length>0 &&
              this.state.images.map((item, index) => 
                <img key={index} style={{
                  top: this.state.topDelta[index] + "%",
                  left: this.state.rightDelta[index] + "%",
                }}
                className={"ele-img" + this.getRandomInt(2)}
                src = {item}/>
              ) 
          }
        </div>
      )}
      {
        this.state.size>=50 && this.state.size<70 &&(
          <div className="normal-bg" onWheel={this.handleScroll}>
            <img src={Bg3} className="shake-bg" alt=""/>
            <div className="relative-title">
              <span>DECENTERALIZED</span>
              <span><br></br>REALITY</span>
            </div>
          </div>
        )
      }
      {
        this.state.size>=70&&(
          <div className="normal-bg" onWheel={this.handleScroll}>
            <img src={Bg4} className="shake-bg" alt=""/>
          </div>
        )
      }
      {
      this.state.size >= 30 && 
      (
        <div
        style={{
          position: "fixed",
          top: "10%",
          right: "2%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <a href="#">
          <img
            src={whatsappImg}
            className="whatappImg"
            alt=""
          />
        </a>
        <a href="#">
          <img
            src={linkedImg}
            className="linkedImg"
            alt=""
          />
        </a>
        <a href="#">
          <img
            src={youtubeImg}
            className="youtubeImg"
            alt=""
          />
        </a>
        <a href="#">
          <img
            src={facebookImg}
            className="facebookImg"
            alt=""
          />
        </a>
        <a href="#">
          <img
            src={logoImg}
            className="logoImg"
            alt=""
          />
        </a>
      </div>
      )
          }
    </div>
  );
}

export default Zoom;
