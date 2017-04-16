import React from 'react';
import { Component } from 'react';
import { fetchBooks, resetSearch, requestResults } from '../actions/index';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Results from './results';

class Search extends Component {

  constructor(props) {
    super(props);

    this.state = {
      value : this.props.searchTerm,
      startIndex : 0,
      itemsPerPage : 10
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleItemsPPChange = this.handleItemsPPChange.bind(this);
  }

  componentDidMount() {
    // when the component mounts, if the search term has been defined previously
    // fetch the same results from the previous search
    if (this.state.value !== '') {
      this.props.requestResults();
      this.props.fetchBooks(this.state.value, this.state.startIndex, 10)
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
    this.props.requestResults();
    this.props.fetchBooks(value, 0, this.state.itemsPerPage);
    this.setState({
      startIndex : 0
    })
  }

  handleItemsPPChange(event) {
    this.props.fetchBooks(this.state.value, this.state.startIndex, event.target.value);
    this.setState({
      itemsPerPage : event.target.value
    });
  }


  handleNext() {
    this.props.requestResults();
    var newStartIndex = this.state.startIndex + 10
    this.props.fetchBooks(this.state.value, newStartIndex, this.state.itemsPerPage, this.state.itemsPerPage)

    this.setState({
      startIndex : newStartIndex
    })
  }

  // handleNext and handleBack could be refactored into one function

  handleBack() {
    this.props.requestResults();
    var newStartIndex = this.state.startIndex - 10
    this.props.fetchBooks(this.state.value, newStartIndex, this.state.itemsPerPage)

    this.setState({
      startIndex : newStartIndex
    })
  }


  render() {
    return (
        <div className="search-component">
          <div className="row">
            <div className="search-items-per-page">
              <select value={this.state.itemsPerPage} onChange={this.handleItemsPPChange}>
                <option default>10</option>
                <option default>20</option>
                <option default>30</option>
                <option default>40</option>
              </select>
            </div>
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
            <Results
             onNextClick = {this.handleNext.bind(this)}
             onBackClick = {this.handleBack.bind(this)}
             startIndex = {this.state.startIndex}
             itemsPerPage = {this.state.itemsPerPage} />
          </div>
        </div>
    );
  }
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchBooks, resetSearch, requestResults}, dispatch)
}

function mapStateToProps(state) {
  return {
    searchTerm : state.searchTerm
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);
