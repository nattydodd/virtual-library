import React from 'react';
import { Component } from 'react';
import { fetchBooks, resetSearch } from '../actions/index';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Results from './results';

class Search extends Component {

  constructor(props) {
    super(props);

    this.state = {
      value : this.props.searchTerm,
    }

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    // when the component mounts, if the search term has been defined previously
    // fetch the same results from the previous search
    if (this.state.value !== '') {
      this.props.fetchBooks(this.state.value)
    }
  }

  componentWillReceiveProps(nextprops) {
    console.log(`nextprops`, nextprops.searchTerm);
      this.setState({
        value : nextprops.searchTerm
      });
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    });
  }

  handleReset() {
    this.props.resetSearch();
  }

  handleSubmit(value) {
    this.props.fetchBooks(value);
  }


  render() {
    return (
        <div className="search-component">
          <div className="row">
            <div className="col-sm-4 col-sm-offset-4">
             <button className="btn btn-default" type="button" onClick={() => this.handleReset()}>Reset Search</button>
              <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search for a book"
                    onChange={this.handleChange}
                    value={this.state.value} />

                    <span className="input-group-btn">
                     <button className="btn btn-default" type="button" onClick={() => this.handleSubmit(this.state.value)}>Search</button>
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
  return bindActionCreators({fetchBooks, resetSearch}, dispatch)
}

function mapStateToProps(state) {
  return {
    searchTerm : state.searchTerm
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);
