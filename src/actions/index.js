import axios from 'axios';

export const FETCH_BOOK = 'FETCH_BOOK';
export const RESET_SEARCH = 'RESET_SEARCH';
export const SELECT_BOOK = 'SELECT_BOOK';
export const STORE_SEARCH_TERM = 'STORE_SEARCH_TERM';
export const ERROR_MESSAGE = 'ERROR_MESSAGE';
export const RESET_SEARCH_TERM = 'RESET_SEARCH_TERM';
export const REQUEST_RESULTS = 'REQUEST_RESULTS';
export const SET_START_INDEX = 'SET_START_INDEX';
export const RESET_START_INDEX = 'RESET_START_INDEX';
export const SET_ITEMS_PP = 'SET_ITEMS_PP';

const GB_API_KEY = 'AIzaSyBTY_vXOKm2K13_QdWesWxjis-exsjBKv4'

export function setItemsPP(number) {
  return {
    type: SET_ITEMS_PP,
    payload: number
  }
}

export function setStartIndex(index) {
  return {
    type: SET_START_INDEX,
    payload: index
  }
}

export function requestResults() {
  return {
    type: REQUEST_RESULTS
  }
}

function storeResults(response) {
  return {
      type: FETCH_BOOK,
      payload: response
    }
}

function storeSearchTerm(props) {
  return {
    type: STORE_SEARCH_TERM,
    payload: props
  }
}

function errorMessage(err) {
  return {
    type: ERROR_MESSAGE,
    payload: err.response.data
  }
}

export function fetchBooks(props, startIndex, itemsPerPage) {
  var searchQuery = ''
  if (props != undefined) {
    searchQuery = props.split(' ').join('+');
  }
  return function(dispatch) {
    const request = axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchQuery}&startIndex=${startIndex}&maxResults=${itemsPerPage}&key=${GB_API_KEY}`)
      .then((request) => {
        dispatch(storeResults(request));
        dispatch(storeSearchTerm(props));
      })
      .catch((err) => {
        console.log(`fail:`, err.response);
        if (err.response.status === 400) {
          dispatch(errorMessage(err));
        }
      });
  }
}

function resetResults() {
  return {
    type: RESET_SEARCH
  }
}

function resetSearchTerm() {
  return {
    type: RESET_SEARCH_TERM
  }
}

function resetStartIndex() {
  return {
    type: RESET_START_INDEX
  }
}

export function resetSearch() {
  return function(dispatch) {
    dispatch(resetResults());
    dispatch(resetSearchTerm());
    dispatch(resetStartIndex());
  }
}

export function selectBook(book) {
  return {
    type: SELECT_BOOK,
    payload: book
  }
}
