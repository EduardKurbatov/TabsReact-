import React, { Component } from "react";

const styles = {};

export class TabItem extends Component {
  getStyle() {
    if (this.props.tabs.active === true) {
      return {
        backgroundColor: "lightseagreen"
      };
    } else {
      return {
        background: "grey"
      };
    }
  }

  getContent = () => {
    if(this.props.tabs.active ===true) {
      return {
        visibility: 'visible'
      }
    } else {
      return {
      visability: 'hidden'
      }
    }
  }

  render() {
    const { id } = this.props.tabs;
    return (
      <div className="tab">
        <button
          className="tabbtn"
          style={this.getStyle()}
          onClick={this.props.clicked.bind(this, this.props.tabs.id)}
        >
          {this.props.tabs.title}
        </button>
        <div className="content" style={this.getContent()}>{this.props.tabs.content}</div>
      </div>
    );
  }
}

export default TabItem;
