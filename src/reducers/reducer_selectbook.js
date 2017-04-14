import { SELECT_BOOK } from '../actions/index';

const INITIAL_STATE = null;

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case SELECT_BOOK:
      console.log(action.payload)
      return state = [action.payload]
    default:
      return state;
  }
}
