import axios from 'axios';

export const FETCH_BOOK = 'FETCH_BOOK';
export const RESET_SEARCH = 'RESET_SEARCH';
export const SELECT_BOOK = 'SELECT_BOOK';
export const STORE_SEARCH_TERM = 'STORE_SEARCH_TERM';
export const NO_RESULTS = 'NO_RESULTS';

const GB_API_KEY = 'AIzaSyBTY_vXOKm2K13_QdWesWxjis-exsjBKv4'

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

function noResults() {
  return {
    type: NO_RESULTS
  }
}

export function fetchBooks(props) {
  return function(dispatch) {
    const request = axios.get(`https://www.googleapis.com/books/v1/volumes?q=${props}&key=${GB_API_KEY}`)
      .then((request) => {
        dispatch(storeResults(request));
        dispatch(storeSearchTerm(props));
      })
      .catch((err) => {
        dispatch(noResults());
        console.log(`fail:`, err);
      })
  }
}

export function resetSearch() {
  return {
    type: RESET_SEARCH
  }
}

export function selectBook(book) {
  return {
    type: SELECT_BOOK,
    payload: book
  }
}
