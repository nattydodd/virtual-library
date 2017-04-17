import React from 'react';
import { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class Results extends Component {

  constructor(props) {
    super(props);

    this.state = {
      results: [],
      sorted: 'initial'
    }
  }


  componentWillReceiveProps(nextprops) {
    if (nextprops.results) {
      this.setState({
        results : nextprops.results,
        sorted: 'initial'
      });
    }
  }

  handleSelect(book) {
    this.props.selectBook(book);
    this.context.router.push(`/${book.id}`);
  }

  sortResults() {
    var toggleSorting = this.state.sorted === 'initial' || 'ascending' ? 'descending' : 'ascending'
    this.setState({
      sorted : toggleSorting
    });
  }

  renderResults(results) {
    if (this.state.sorted !== 'initial') {
      results = results.reverse();
    }
    return results.map((book) => {
      return (
          <tr
            className="result-details"
            key={book.id}
            onClick={() => this.handleSelect(book)}>
            <td>{book.volumeInfo.title}</td>
            <td>{book.volumeInfo.subtitle}</td>
            <td>{book.volumeInfo.authors ? book.volumeInfo.authors.join(', ') : 'N/A' }</td>
            <td>{book.volumeInfo.publishedDate}</td>
          </tr>
      );
    });
  }


  render() {
    // if there are errors with the search
    if (this.props.errors !== '') {
      return (
        <div className="container-fluid invalid">
          <h2>Invalid Search: {this.props.errors}</h2>
        </div>
      );
    }
    // if the search is in process but hasn't found results yet
    if (this.props.isFetching) {
      return (
        <div className="container-fluid is-fetching">
          <h2>Loading...</h2>
        </div>
      );
    }
    // If the search hasn't started yet
    if (this.state.results === undefined || this.state.results.length === 0) {
      return (
        <div className="container-fluid new-search">
          <div className="image-container">
            <img src="http://i.imgur.com/vwIJD8x.png" />
            <p>Hope you find what you are looking for!</p>
          </div>
        </div>
      );
    }
    // If the search has returned no results
    if (this.state.results[0].totalItems === 0 ) {
      return (
        <div className="container-fluid no-results">
          <h2>Sorry, No Results Found.</h2>
        </div>
      );
    }


    // If the search returns results
    return (
      <div className="container-fluid results-component">
        <table className="table-striped results-table">
          <thead>
            <tr>
              <th onClick={() => this.sortResults()}><h2>Title</h2></th>
              <th><h2>Subtitle</h2></th>
              <th><h2>Authors</h2></th>
              <th><h2>Publication Date</h2></th>
            </tr>
          </thead>
          <tbody>
            {this.renderResults(this.state.results[0].items)}
          </tbody>
        </table>
        <div className="button-container">
          <button className={ this.props.startIndex === 0 ? 'no-button' : 'btn btn-default'} onClick={() => this.props.onBackClick() }>Back</button>
          <button className={ this.props.startIndex + this.props.itemsPerPage >= parseInt(this.state.results[0].totalItems) ? 'no-button' : 'btn btn-default'} onClick={() => this.props.onNextClick() }>Next</button>
        </div>
      </div>
    );
  };

}

Results.contextTypes = {
  router: PropTypes.object
};

function mapStateToProps(state) {
  return {
    results : state.results,
    isFetching : state.isFetching,
    errors : state.errors
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({selectBook}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Results);
