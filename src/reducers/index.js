import { combineReducers } from 'redux';
import ResultsReducer from './reducer_results';
import SelectBookReducer from './reducer_selectbook';
import SearchTermReducer from './reducer_store_search';
import FetchingReducer from './reducer_fetching';
import ErrorsReducer from './reducer_errors';
import StartIndexReducer from './reducer_start_index';
import ItemsPPReducer from './reducer_items_pp';

const rootReducer = combineReducers({
  results : ResultsReducer,
  book : SelectBookReducer,
  searchTerm : SearchTermReducer,
  isFetching : FetchingReducer,
  errors : ErrorsReducer,
  startIndex : StartIndexReducer,
  itemsPerPage : ItemsPPReducer
});

export default rootReducer;
