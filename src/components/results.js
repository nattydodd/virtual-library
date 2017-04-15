import React from 'react';
import { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class Results extends Component {

  constructor(props) {
    super(props);

    this.state = {
      results: []
    }
  }


  componentWillReceiveProps(nextprops) {
    if (nextprops.results) {
      this.setState({
        results : nextprops.results[0]
      });
    }
  }

  handleSelect(book) {
    console.log(book);
    this.props.selectBook(book);
    this.context.router.push(`/books/${book.id}`);
  }

  renderResults(results) {
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
// needs to be refactored if search returns no results
    if (this.state.results == 'no results found') {
      return (
        <div>No Results Found</div>
      );
    }
    
    if (this.state.results.length === 0) {
      return (
        <div></div>
      );
    }

    return (
      <div className="results-component">
        <table className="table-striped results-table">
          <thead>
            <tr>
              <th>Title</th>
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
    results : state.results
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({selectBook}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Results);
