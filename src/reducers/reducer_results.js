import { FETCH_BOOK } from '../actions/index';
import { RESET_SEARCH } from '../actions/index';
import { NO_RESULTS } from '../actions/index';

const INITIAL_STATE = [];

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
  case FETCH_BOOK:
    return state = [action.payload.data.items]
  case RESET_SEARCH:
    console.log('resetting')
    return state = []
  case NO_RESULTS:
    return state = ['no results found'];
  default:
    return state;
  }
}
