import { FETCH_BOOK } from '../actions/index';
import { REQUEST_RESULTS } from '../actions/index';

export default function(state = false, action) {
  switch (action.type) {
    case REQUEST_RESULTS :
    console.log('fetching true')
      return true;
    case FETCH_BOOK :
    console.log('fetching false')
      return false;
    default:
      return state;
  }
}
