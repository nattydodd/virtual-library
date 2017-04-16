import { SET_ITEMS_PP } from '../actions/index';

const INITIAL_STATE = 10;

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
  case SET_ITEMS_PP :
    return state = parseInt(action.payload)
  default:
    return state;
  }
}
