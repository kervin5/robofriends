import React, { Component } from "react";
import CounterButton from "./CounterButton";
import CounterButton2 from "./CounterButton2";

class Header extends Component {
  //Doesn't affect render of child compoents if props or state change
  // shouldComponentUpdate(nextProps, nextState) {
  //     return false;
  // }

  render() {
    return (
      <React.Fragment>
        <CounterButton2 color="red" />
        <CounterButton color="red" />
        <h1 className="f1">ROBOFRIENDS</h1>
      </React.Fragment>
    );
  }
}

export default Header;
