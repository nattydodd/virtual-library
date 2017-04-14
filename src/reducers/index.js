import { combineReducers } from 'redux';
import ResultsReducer from './reducer_results';
import SelectBookReducer from './reducer_selectbook';

const rootReducer = combineReducers({
  results : ResultsReducer,
  book : SelectBookReducer
});

export default rootReducer;
