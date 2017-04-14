import React from 'react';
import { Component } from 'react';
import { fetchBooks } from '../actions/index';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Search extends Component {

  constructor(props) {
    super(props);

    this.state = {
      value : ''
    }

    this.handleChange = this.handleChange.bind(this);
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
        </div>
    );
  }
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchBooks}, dispatch)
}

export default connect(null, mapDispatchToProps)(Search);
