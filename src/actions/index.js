import axios from 'axios';

const FETCH_BOOK_BY = 'FETCH_BOOK_BY';
const RESET_SEARCH = 'RESET_SEARCH';

const GB_API_KEY = 'AIzaSyBTY_vXOKm2K13_QdWesWxjis-exsjBKv4';

export function fetchBooks(props) {
  const request =  axios.get(`https://www.googleapis.com/books/v1/volumes?q=${props}&key=${GB_API_KEY}`)
  return {
      type: FETCH_BOOK_BY,
      payload: request
    }
}

export function resetSearch() {
  return {
    type: RESET_SEARCH
  }
}