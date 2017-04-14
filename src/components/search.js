import React from 'react';
import { Component } from 'react';

export default class Search extends Component {
  render() {
    return (
        <div className="search-component">
          <div className="row">
            <div className="col-sm-4 col-sm-offset-4">
              <div className="input-group">
                <input type="text" className="form-control" placeholder="Search for a book" />
                <span className="input-group-btn">
                  <button className="btn btn-default" type="button">Search</button>
                </span>
              </div>
            </div>
          </div>
        </div>
    );
  }
}
