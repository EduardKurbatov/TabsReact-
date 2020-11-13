import React, { Component } from "react";


export class TabItem extends Component {

  getContent = () => {
    if(this.props.tabItem.active) {
      return {
        visibility: 'visible'
      }
    } else {
      return {
      visability: 'hidden'
      }
    }
  };


  
  render() {
    const {active, id, title, content} = this.props.tabItem;
    return (
      <div className="tab">
        <button
          className={`tabbtn ${active && 'active'}`}
          onClick={this.props.setActiveTab.bind(this, id)}
        >
          {title}
          
        </button>
          <button className="close" onClick={this.props.delTab.bind(this, id)}>X</button>
        <div className="content" style={this.getContent()}>{content}</div>
      </div>
    );
  }
};

export default TabItem;
