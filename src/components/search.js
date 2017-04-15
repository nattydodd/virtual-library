import React from 'react';
import { Component } from 'react';
import { fetchBooks } from '../actions/index';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Results from './results';

class Search extends Component {

  constructor(props) {
    super(props);

    this.state = {
      value : this.props.searchTerm
    }

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    if (this.state.value !== '') {
      this.props.fetchBooks(this.state.value)
    }
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    });
    this.props.fetchBooks(event.target.value)
  }

  render() {
    return (
        <div className="search-component">
          <div className="row">
            <div className="col-sm-4 col-sm-offset-4">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search for a book"
                  onChange={this.handleChange}
                  value={this.state.value} />
                  <span className="input-group-btn">
                   <button className="btn btn-default" type="button">Search</button>
                 </span>
              </div>
            </div>
          </div>
          <div className="row">
            <Results />
          </div>
        </div>
    );
  }
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchBooks}, dispatch)
}

function mapStateToProps(state) {
  return {
    searchTerm : state.searchTerm
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);
