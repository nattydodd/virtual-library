import { FETCH_BOOK } from '../actions/index';
import { RESET_SEARCH } from '../actions/index';

const INITIAL_STATE = [];

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
  case FETCH_BOOK:
    console.log(action.payload.data.items);
    return state = [action.payload.data.items]
  case RESET_SEARCH:
    return state = []
  }
    return state;
}
