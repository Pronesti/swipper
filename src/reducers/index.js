import mainReducer from './mainReducer';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
  main: mainReducer
});

export default allReducers;