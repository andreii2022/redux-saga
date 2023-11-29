import { combineReducers } from 'redux';
import news from './news';
import errors from './errors';

const reducers = combineReducers({
  news,
  errors,
});

export default reducers;
