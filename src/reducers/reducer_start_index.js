import { SET_START_INDEX } from '../actions/index';
import { RESET_START_INDEX } from '../actions/index';

const INITIAL_STATE = 0;

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
  case SET_START_INDEX :
    return state = parseInt(action.payload)
  case RESET_START_INDEX:
    return state = INITIAL_STATE
  default:
    return state;
  }
}
