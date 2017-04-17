import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router';


export default class Home extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row home-component">
          <div className="col-sm-6 col-sm-offset-3">
            <h1>Welcome to this Google Books Search Engine.</h1>
            <h4 className="home-subtitle">This application was built using React.js and Redux, compiled using Webpack & Babel,
            and styled using SASS.</h4>
            <hr />
            <p>The decision to use Redux instead of passing the entire state down directly from parent to child through props, was
            made primarily to enhance user experience. By storing the state in a reducer, after a user selects a book to view, they can navigate back to the search page and they will find themselves in the
            same place where they left off.</p>
            <div className="home-button-container">
              <Link to="/search" className="btn btn-default">Take a Peek!</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
