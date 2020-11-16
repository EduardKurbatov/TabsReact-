import React, { Component } from "react";

export class TabItem extends Component {
  render() {
    const { active, id, title, content } = this.props.tabItem;
    return (
      <div className="tab">
        <button
          className={`tabbtn ${active && "active"}`}
          onClick={this.props.setActiveTab.bind(this, id)}
        >
          {title}
        </button>
        <button className="close" onClick={this.props.delTab.bind(this, id)}>
          X
        </button>
        {active ? <div className="content">{content}</div> : undefined}
      </div>
    );
  }
}

export default TabItem;
