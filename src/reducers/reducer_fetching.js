import { FETCH_BOOK } from '../actions/index';
import { REQUEST_RESULTS } from '../actions/index';
import { ERROR_MESSAGE } from '../actions/index';

export default function(state = false, action) {
  switch (action.type) {
    case REQUEST_RESULTS :
      return true;
    case FETCH_BOOK :
      return false;
    case ERROR_MESSAGE :
      return false;
    default:
      return state;
  }
}
