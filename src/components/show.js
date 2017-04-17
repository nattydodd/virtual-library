import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class Show extends Component {

  render() {

    const book = this.props.book[0].volumeInfo;

    return (
        <div className="container-fluid show-component">
          <div className="row">
            <div className="col-sm-6 col-sm-offset-3 show-details-container">
              <div className="row">
                <img src={book.imageLinks.thumbnail || 'http://books.google.com/books/content?id=nn3g45CMioEC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api'} />
                <span className="details-headings">
                  <h1>{book.title}</h1>
                  <h3>Written By: {book.authors || 'Unknown'}</h3>
                  <h3>Published By: {book.publisher || 'N/A'}</h3>
                </span>
              </div>
              <p>{book.description}</p>
              <p className="details-pages">{book.pageCount || 'N/A'} Pages</p>
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

function mapStateToProps(state) {
  return {
    book : state.book
  };
}

export default connect(mapStateToProps)(Show);
