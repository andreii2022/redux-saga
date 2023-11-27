import { combineReducers } from 'redux';
import counter from './counter';
import news from './news';
import errors from './errors';

const reducers = combineReducers({
  news,
  errors,
});

export default reducers;
