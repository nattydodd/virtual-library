import { STORE_SEARCH_TERM } from '../actions/index';

const INITIAL_STATE = '';

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
  case STORE_SEARCH_TERM:
    return state = [action.payload]
  default:
    return state;
  }
}
