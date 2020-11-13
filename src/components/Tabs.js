import React, { Component } from "react";
import TabItem from "./TabItem";

export class tabs extends Component {
  render() {
    return this.props.tabs.map((tabItem =>
      <TabItem key={tabItem.id} tabItem ={tabItem} delTab={this.props.delTab} setActiveTab={this.props.setActiveTab}/>
    ))
  }
}

export default tabs;
