import { combineReducers } from 'redux';
import ResultsReducer from './reducer_results';
import SelectBookReducer from './reducer_selectbook';
import SearchTermReducer from './reducer_store_search';

const rootReducer = combineReducers({
  results : ResultsReducer,
  book : SelectBookReducer,
  searchTerm : SearchTermReducer
});

export default rootReducer;
