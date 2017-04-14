import axios from 'axios';

export const FETCH_BOOK = 'FETCH_BOOK';
export const RESET_SEARCH = 'RESET_SEARCH';
export const SELECT_BOOK = 'SELECT_BOOK';

const GB_API_KEY = 'AIzaSyBTY_vXOKm2K13_QdWesWxjis-exsjBKv4'

export function fetchBooks(props) {
  const request = axios.get(`https://www.googleapis.com/books/v1/volumes?q=${props}&key=${GB_API_KEY}`)
  return {
      type: FETCH_BOOK,
      payload: request
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
