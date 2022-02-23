import React, { Component } from "react";
import Bg from "../src/assets/img/1.gif";
import Bg1 from "../src/assets/img/bg-2.png";

import whatsappImg from "../src/assets/img/whatsapp.png";
import linkedImg from "../src/assets/img/linkedin.png";
import youtubeImg from "../src/assets/img/youtube.png";
import facebookImg from "../src/assets/img/facebook.png";
import logoImg from "../src/assets/img/logo.gif";
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
      <div style ={{position: "fixed", top:"10%", right:"2%", display: "flex", flexDirection:"column",alignItems: "center"}}>
        <a href="#"> <img src={whatsappImg} style={{width:"64px", height:"64px", marginBottom: "1em"}} alt="" /></a>
        <a href="#"> <img src={linkedImg} style={{ width:"48px", height:"48px", marginBottom: "1em"}} alt=""/></a>
        <a href="#"> <img src={youtubeImg} style={{width:"52px", height:"52px", marginBottom: "1em"}} alt="" /></a>
        <a href="#"> <img src={facebookImg} style={{width:"52px", height:"52px", marginBottom: "1em"}} alt="" /></a>
        <a href="#"> <img src={logoImg} style={{width:"256px", height:"256px", marginBottom: "1em", opacity: "0.9"}} alt="" /></a>
      </div>
    </div>
  );
}

export default Zoom;
