// import { INCREACE_COUNT, DECREACE_COUNT } from '../constans';

// const counter = (state = { count: 0 }, { type }) => {
//   switch (type) {
//     case INCREACE_COUNT:
//       return { ...state, count: state.count + 1 };
//     case DECREACE_COUNT:
//       return { ...state, count: state.count - 1 };

//     default:
//       return state;
//   }
// };

// export default counter;

// const counter = (state = { count: 0 }, { type }) => {
//   switch (type) {
//     case INCREACE_COUNT:
//       return { ...state, count: state.count + 1 };
//     case DECREACE_COUNT:
//       return { ...state, count: state.count - 1 };
//     default:
//       return state;
//   }
// };
// export default counter;

import { INCRESE_COUNT, DECRESE_COUNT } from '../constans';

const counter = (state = { count: 0 }, { type }) => {
  switch (type) {
    case INCRESE_COUNT:
      return { ...state, count: state.count + 1 };
    case DECRESE_COUNT:
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};

export default counter;
