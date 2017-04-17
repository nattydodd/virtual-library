import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class Show extends Component {

  render() {

    const book = this.props.book[0].volumeInfo;

    return (
        <div className="show-component">
          {book.title}
          <Link className="btn btn-default" to="/search">
            Back
          </Link>
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
