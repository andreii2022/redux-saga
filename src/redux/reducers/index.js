import { combineReducers } from 'redux';
import counter from './counter';
import news from './news';

const reducers = combineReducers({
  counter,
  news,
});

export default reducers;
