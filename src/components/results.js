import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';

class Results extends Component {

  constructor(props) {
    super(props);

    this.state = {
      results: []
    }
  }

  componentWillReceiveProps(nextprops) {
    this.setState({
      results : nextprops.results[0]
    });
  }

  renderResults(results) {
    console.log(results)
    return results.map((book) => {
      return (
        <tr key={book.id}>
          <td>{book.volumeInfo.title}</td>
        </tr>
      );
    });
  }

  render() {

    if (this.state.results.length === 0) {
      return (
        <div></div>
      );
    }

    return (
      <div className="results-component">
        <table className="results-table">
          <thead>
            <tr>
              <th>Title</th>
              <th>SubTitle</th>
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

function mapStateToProps(state) {
  return {
    results : state.results
  };
}

export default connect(mapStateToProps)(Results);
