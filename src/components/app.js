import React from 'react';
import { Component } from 'react';
import Search from '../containers/search';


export default class App extends Component {
  render() {
    return (
      <div className="container-fluid app-component">
        {this.props.children}
      </div>
    );
  }
}
