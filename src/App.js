import React from 'react';
import './App.css';
import Tabs from './components/Tabs';
import './css/Tabs.css';
import AddTabBtn from './components/AddTabBtn';
const { v4: uuidv4 } = require('uuid');

class App extends React.Component {
  state = {
    tabsList: [
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
      tabsList: this.state.tabsList.map(tab => {
        tab.active = tab.id === id;
        return tab;
      })
    });
  };

  delTab = id => {
    this.state.tabsList = this.state.tabsList.filter(tab => tab.id !== id);
    this.state.tabsList.map(tab => {
      tab.active = tab.id === id;
      return tab;
    });
    if (this.state.tabsList.length) {
      this.setActiveTab(this.state.tabsList[0].id);
    }
    this.setState({
      tabsList: this.state.tabsList
    });
  };

  addTab = () => {
    const newTab = {
      id: uuidv4(),
      title: `Tab#${this.state.tabsList.length + 1}`,
      content: `It's a content of Tab #${this.state.tabsList.length + 1}`,
      active: false
    };
    this.state.tabsList.push(newTab);
    this.setState({
      tabsList: this.state.tabsList
    })
  };

  render() {
    return (
      <div className="App">
        <div className="main">
          <div className="tabs">
            <Tabs
              tabs={this.state.tabsList}
              delTab={this.delTab}
              setActiveTab={this.setActiveTab}
            />
            <AddTabBtn addTab={this.addTab} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
