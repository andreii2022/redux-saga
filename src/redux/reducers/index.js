// import { combineReducers } from 'redux';
// import counter from './counter';

// const reducer = combineReducers({
//   counter,
// });

// export default reducer;

//------------------------------------------------

// import { combineReducers } from 'redux'; // объеденяет несколько функций в одну  для разделения логики обработки действий
// import counter from './counter';

// const reducer = combineReducers({
//   counter,
// });

// export default reducer;
//-------------------------------------------------------------------------

import { combineReducers } from 'redux';
import counter from './counter';
import news from './news';

const reducers = combineReducers({
  counter,
  news,
});

export default reducers;
