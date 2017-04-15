import { FETCH_BOOK } from '../actions/index';
import { RESET_SEARCH } from '../actions/index';
import { ERROR_MESSAGE } from '../actions/index';

const INITIAL_STATE = [];

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
  case FETCH_BOOK:
    if (action.payload.data.items === undefined ) {
      return state = ['No Results Found']
    }
    return state = [action.payload.data.items]
  case RESET_SEARCH:
    console.log('resetting')
    return state = []
  default:
    return state;
  }
}
