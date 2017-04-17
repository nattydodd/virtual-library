import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { GB_API_KEY } from '../actions/index';
import axios from 'axios';

class Show extends Component {

  constructor(props) {
    super(props);

    this.state = {
      errors: ''
    }
  }

  // this selected book could also be accessed using this.props.book and the mapStateToProps function,
  // but I changed it because it would not work on page refresh

  componentDidMount() {
    const request = axios.get(`https://www.googleapis.com/books/v1/volumes/${this.props.routeParams.id}?key=${GB_API_KEY}`)
      .then((request) => {
        console.log(`data`, request.data.volumeInfo);
        this.setState({
          book : request.data.volumeInfo
        });
      })
      .catch((err) => {
        console.log(err);
        this.setState({
          errors : err.response.data.error.message
        });
      });
  }

  render() {

    // if the search returns errors:
    if (this.state.errors !== '') {
      return (
        <div className="container-fluid show-component">
          <div className="row">
            <div className="col-sm-6 col-sm-offset-3 show-details-container">
              <div className="show-errors">
                <h3>Error: {this.state.errors}</h3>
                <Link className="show-back btn btn-default" to="/search">
                  Back
                </Link>
              </div>
            </div>
          </div>
        </div>
      );
    }
    // if the book has not been fetched yet:
    if (!this.state.book) {
      return (
        <div className="container-fluid show-component">
          <div className="row">
            <div className="col-sm-6 col-sm-offset-3 show-details-container">
              <div className="show-loading">
                <h2>Loading...</h2>
              </div>
            </div>
          </div>
        </div>
      );
    }
    // else (the book has been fetched):
    return (
        <div className="container-fluid show-component">
          <div className="row">
            <div className="col-sm-6 col-sm-offset-3 show-details-container">
              <div className="row">
                <img src={ this.state.book.imageLinks ? this.state.book.imageLinks.thumbnail : 'http://books.google.com/books/content?id=nn3g45CMioEC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api' } />
                <span className="details-headings">
                  <h1>{ this.state.book.title }</h1>
                  <h3>Written By: { this.state.book.authors || 'Unknown'}</h3>
                  <h3>Published By: { this.state.book.publisher || 'N/A'}</h3>
                  <h3>Language : { this.state.book.language || 'N/A' }</h3>
                </span>
              </div>
              <p>{ this.state.book.categories }</p>
              <p className="details-pages">{ this.state.book.pageCount || 'N/A'} Pages</p>
            </div>
          </div>
          <div className="row show-back-container">
            <Link className="show-back btn btn-default" to="/search">
              Back
            </Link>
          </div>
        </div>
    );
  }
}


export default Show;
