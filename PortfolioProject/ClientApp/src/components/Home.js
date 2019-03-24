import React, { Component } from "react";
import Gallery from "./Gallery";
import Login from "./Login";

export class Home extends Component {
  displayName = Home.name;

  render() {
    return <Login />;
  }
}
