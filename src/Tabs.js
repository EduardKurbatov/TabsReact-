import React, { Component } from "react";
import TabItem from "./TabItem";

export class tabs extends Component {
  render() {
    return this.props.tabs.map(( tabs =>
      <TabItem key={tabs.id} tabs ={tabs} clicked={this.props.clicked}/>
    ))
  }
}

export default tabs;
