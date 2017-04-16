import axios from 'axios';

export const FETCH_BOOK = 'FETCH_BOOK';
export const RESET_SEARCH = 'RESET_SEARCH';
export const SELECT_BOOK = 'SELECT_BOOK';
export const STORE_SEARCH_TERM = 'STORE_SEARCH_TERM';
export const ERROR_MESSAGE = 'ERROR_MESSAGE';
export const RESET_SEARCH_TERM = 'RESET_SEARCH_TERM';
export const REQUEST_RESULTS = 'REQUEST_RESULTS';

const GB_API_KEY = 'AIzaSyBTY_vXOKm2K13_QdWesWxjis-exsjBKv4'

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
    payload: err
  }
}

export function fetchBooks(props) {
  return function(dispatch) {
    const request = axios.get(`https://www.googleapis.com/books/v1/volumes?q='${props}'&key=${GB_API_KEY}`)
      .then((request) => {
        dispatch(storeResults(request));
        dispatch(storeSearchTerm(props));
      })
      .catch((err) => {
        console.log(`fail:`, err);
      })
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

export function resetSearch() {
  return function(dispatch) {
    dispatch(resetResults());
    dispatch(resetSearchTerm());
  }
}

export function selectBook(book) {
  return {
    type: SELECT_BOOK,
    payload: book
  }
}
