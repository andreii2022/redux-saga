// import { combineReducers } from 'redux';
// import counter from './counter';

// const reducer = combineReducers({
//   counter,
// });

// export default reducer;


import { combineReducers } from "redux"; // объеденяет несколько функций в одну  для разделения логики обработки действий

const test = (state = {}, action) => {
    return state

};


const reducer = combineReducers({
    test
}); 


expport default reducer;