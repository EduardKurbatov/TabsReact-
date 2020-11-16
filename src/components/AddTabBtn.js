import React, { Component } from 'react';
import '../css/Tabs.css';

export class AddTab extends Component {
    render() {
        return (
            <button id="addbtn" onClick={this.props.addTab}>+</button>
        );
    };
};

export default AddTab
