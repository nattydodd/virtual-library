import React from 'react';
import { Component } from 'react';
import Search from './search';


export default class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="app-component">
          {this.props.children}
        </div>
      </div>  
    );
  }
}
