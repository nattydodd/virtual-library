import { STORE_SEARCH_TERM } from '../actions/index';
import { RESET_SEARCH_TERM } from '../actions/index';

const INITIAL_STATE = '';

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
  case STORE_SEARCH_TERM:
    return state = [action.payload]
  case RESET_SEARCH_TERM:
   console.log('resetting term');
    return state = ''
  default:
    return state;
  }
}
