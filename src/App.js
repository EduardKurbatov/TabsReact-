import React from "react";
import "./App.css";
import Tabs from "./Tabs";
import "./Tabs.css";

class App extends React.Component {
  state = {
    tabsInfo: [
      {
        id: 1,
        title: `Tab #1`,
        content: `This is content of Tab #1`,
        active: true
      },
      {
        id: 2,
        title: `Tab #2`,
        content: `This is content of Tab #2`,
        active: false
      },
      {
        id: 3,
        title: `Tab #3`,
        content: `This is content of Tab #3`,
        active: false
      }
    ]
  };

    
  clicked = (id) => {
    this.setState( { tabsInfo: this.state.tabsInfo.map(tabsInfo => {
      if(tabsInfo.id === id ) {
        tabsInfo.active = !tabsInfo.active
      } else {
        tabsInfo.active = false
      }
      return tabsInfo
    }) });
  }   

  render() {
    return (
      <div className="App">
        <div className="main">
          <div className="tabs">
            <Tabs tabs={this.state.tabsInfo} clicked={this.clicked} />
            <button id="addbtn">+</button>
          </div>
        </div>
      </div>
    );
  }
}


export default App;
