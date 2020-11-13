import React from "react";
import "./App.css";
import Tabs from "./components/Tabs";
import "./css/Tabs.css";
import AddTabBtn from "./components/AddTabBtn";
const { v4: uuidv4 } = require('uuid');


class App extends React.Component {
  state = {
    tabsInfo: [
      {
        id: uuidv4(),
        title: `Tab #1`,
        content: `It's a content of Tab #1`,
        active: true
      },
      {
        id: uuidv4(),
        title: `Tab #2`,
        content: `TIt's a content of Tab #2`,
        active: false
      },
      {
        id: uuidv4(),
        title: `Tab #3`,
        content: `It's a content of Tab #3`,
        active: false
      }
    ]
  };

  setActiveTab = id => {
    this.setState({
      tabsInfo: this.state.tabsInfo.map(tab => {
        tab.active = tab.id === id;
        return tab;
      })
    });
  };


  delTab = id => {
    this.state.tabsInfo = this.state.tabsInfo.filter(tab => tab.id !== id); // same filter
    this.state.tabsInfo.map(tab => {
      tab.active = tab.id === id;
      return tab;
    })
    if (this.state.tabsInfo.length) {
      this.setActiveTab(this.state.tabsInfo[0].id);
    } 
    this.setState({
      tabsInfo: this.state.tabsInfo
    });
    return this.state.tabsInfo.length
  };
  
  
  addTab = () => {
    let addedTab = {
    id: uuidv4(),
    title: `Tab#${this.state.tabsInfo.length + 1}`,
    content: `It's a content of Tab #${this.state.tabsInfo.length + 1}`,
    active: false
    }
    
    this.setState({
    tabsinfo: this.state.tabsInfo.push(addedTab)
  })
  this.delTab();
  };

  render() {
    return (
      <div className="App">
        <div className="main">
          <div className="tabs">
            <Tabs
              tabs={this.state.tabsInfo}
              delTab={this.delTab}
              setActiveTab={this.setActiveTab}
            />
            <AddTabBtn addTab={this.addTab}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
