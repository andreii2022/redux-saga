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

const reducers = combineReducers({
  counter,
});

export default reducers;
