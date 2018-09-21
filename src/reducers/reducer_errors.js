import { ERROR_MESSAGE } from '../actions/index';
import { RESET_SEARCH } from '../actions/index';
import { REQUEST_RESULTS } from '../actions/index';

const INITIAL_STATE = '';

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case ERROR_MESSAGE:
      return state = action.payload.error.message
    case RESET_SEARCH:
      return state = ''
    case REQUEST_RESULTS:
      return state = ''
    default:
      return state;
  }
}
