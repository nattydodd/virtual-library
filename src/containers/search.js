import React from 'react';
import { Component, PropTypes } from 'react';
import { fetchBooks, resetSearch, requestResults, setStartIndex, setItemsPP } from '../actions/index';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Results from './results';
import { Link } from 'react-router';

class Search extends Component {

  constructor(props) {
    super(props);

    this.state = {
      value : this.props.searchTerm,
      startIndex : this.props.startIndex,
      itemsPerPage : this.props.itemsPerPage
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleItemsPPChange = this.handleItemsPPChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  componentDidMount() {
    // when the component mounts, if the search term has been defined previously
    // fetch the same results from the previous search
    if (this.state.value !== '') {
      this.props.requestResults();
      this.props.fetchBooks(this.state.value, this.state.startIndex, this.state.itemsPerPage)
    }
  }


  componentWillReceiveProps(nextprops) {
    // if there is a new search, update the state
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

  goToHome() {
    this.props.resetSearch();
    this.context.router.push('/');
  }

  handleSubmit(value) {
    this.props.requestResults();
    this.props.fetchBooks(value, 0, this.state.itemsPerPage);
    this.setState({
      startIndex : 0
    });
  }

  handleKeyPress(target) {
    // if the user pushes the enter key instead of the search button
    if (target.charCode == 13) {
      this.props.requestResults();
      this.props.fetchBooks(this.state.value, 0, this.state.itemsPerPage);
      this.setState({
        startIndex : 0
      });
    }
  }

  handleItemsPPChange(event) {
    // if items per page changes
    this.props.setItemsPP(parseInt(event.target.value));
    this.props.fetchBooks(this.state.value, this.state.startIndex, event.target.value);
    this.setState({
      itemsPerPage : parseInt(event.target.value)
    });
  }


  handleNext() {
    // if the user pushes the next button
    this.props.requestResults();
    var newStartIndex = this.state.startIndex + this.state.itemsPerPage;
    newStartIndex = newStartIndex < 0 ? 0 : newStartIndex;
    this.props.setStartIndex(newStartIndex);
    this.props.fetchBooks(this.state.value, newStartIndex, this.state.itemsPerPage);

    this.setState({
      startIndex : newStartIndex
    })
  }

  // refactor: handleNext and handleBack could be refactored into one function

  handleBack() {
    // if the user pushes the back button
    this.props.requestResults();
    var newStartIndex = this.state.startIndex - this.state.itemsPerPage;
    newStartIndex = newStartIndex < 0 ? 0 : newStartIndex;
    this.props.setStartIndex(newStartIndex);
    this.props.fetchBooks(this.state.value, newStartIndex, this.state.itemsPerPage);

    this.setState({
      startIndex : newStartIndex
    })
  }


  render() {
    return (
        <div className="search-component">
          <div className="row search-row">
            <div className="col-xs-12 search-intro">
              <div className="search-intro-text">
                <h1>Search the Google Books library</h1>
                <h4>Enter your search term below and browse through the results. Click on a result to view more details.</h4>
              </div>
            </div>
            <div className="col-xs-6 col-sm-3 search-reset">
              <button className="btn btn-primary" onClick={() => this.goToHome()}>Home</button>
              <button className="btn btn-default" type="button" onClick={() => this.handleReset()}>Reset Search</button>
            </div>
            <div className="col-xs-11 col-xs-offset-1 col-sm-6 col-sm-offset-1 search-bar">
              <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search for a book"
                    onChange={this.handleChange}
                    value={this.state.value}
                    onKeyPress={this.handleKeyPress} />

                    <span className="input-group-btn">
                     <button className="btn btn-default" type="button" onClick={() => this.handleSubmit(this.state.value)}>Search</button>
                   </span>
              </div>
            </div>
            <div className="col-xs-10 col-sm-3 search-items-per-page">
              <label>
                <select value={this.state.itemsPerPage} onChange={this.handleItemsPPChange}>
                  <option default>10</option>
                  <option default>20</option>
                  <option default>30</option>
                  <option default>40</option>
                </select>
                <span className="search-label">Results Per Page</span>
              </label>
            </div>
          </div>
          <div className="row">
            <Results
             onNextClick = {this.handleNext.bind(this)}
             onBackClick = {this.handleBack.bind(this)}
             itemsPerPage = {this.state.itemsPerPage}
             startIndex = {this.state.startIndex} />
          </div>
        </div>
    );
  }
}

Search.contextTypes = {
  router: PropTypes.object
};


function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    fetchBooks,
    resetSearch,
    requestResults,
    setStartIndex,
    setItemsPP
  }, dispatch)
}

function mapStateToProps(state) {
  return {
    searchTerm : state.searchTerm,
    startIndex : state.startIndex,
    itemsPerPage : state.itemsPerPage
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);
