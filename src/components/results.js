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
        results : nextprops.results[0],
        sorted: 'initial'
      });
    }
  }

  handleSelect(book) {
    console.log(book);
    this.props.selectBook(book);
    this.context.router.push(`/books/${book.id}`);
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
    // If the search hasn't started yet
    if (this.props.isFetching) {
      return (
        <div>Loading</div>
      );
    }

    if (this.state.results === undefined || this.state.results.length === 0) {
      return (
        <div></div>
      );
    }
    // If the search has returned no results
    if (this.state.results === 'No Results Found' ) {
      return (
        <div>No Results Found</div>
      );
    }


    // If the search returns results
    return (
      <div className="results-component">
        <table className="table-striped results-table">
          <thead>
            <tr>
              <th onClick={() => this.sortResults()}>Title</th>
              <th>Subtitle</th>
              <th>Authors</th>
              <th>Publication Date</th>
            </tr>
          </thead>
          <tbody>
            {this.renderResults(this.state.results)}
          </tbody>
        </table>
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
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({selectBook}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Results);
