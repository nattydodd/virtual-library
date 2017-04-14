import React from 'react';
import { Component } from 'react';

class Results extends Component {

  constructor(props) {
    super(props);

    this.state = {
      results: []
    }
  }

  componentWillReceiveProps(nextprops) {
    this.setState({
      results : nextprops.results
    });
  }

  renderResults(results) {
    return results.map((book) => {
      return (
        <div>
          {book.title}
        </div>
      );
    });
  }

  render() {

    if (!this.props.results) {
      return (
        <div>
        </div>
      );
    };

    return (
      <div className="results-component">
        {this.renderResults(this.state.results)}
      </div>
    );
  };

}

function mapStateToProps(state) {
  return {
    results : state.results
  };
}

export default Results;
