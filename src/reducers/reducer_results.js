import { FETCH_BOOK } from '../actions/index';
import { RESET_SEARCH } from '../actions/index';
import { ERROR_MESSAGE } from '../actions/index';

const INITIAL_STATE = [];

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
  case FETCH_BOOK:
    return state = [action.payload.data]
  case RESET_SEARCH:
    return state = []
  default:
    return state;
  }
}
