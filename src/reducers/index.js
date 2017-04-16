import { combineReducers } from 'redux';
import ResultsReducer from './reducer_results';
import SelectBookReducer from './reducer_selectbook';
import SearchTermReducer from './reducer_store_search';
import FetchingReducer from './reducer_fetching';

const rootReducer = combineReducers({
  results : ResultsReducer,
  book : SelectBookReducer,
  searchTerm : SearchTermReducer,
  isFetching : FetchingReducer
});

export default rootReducer;
