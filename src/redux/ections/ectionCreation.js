// import { INCREACE_COUNT, DECREACE_COUNT } from '../constans';

// export const increaceCount = () => ({
//   type: INCREACE_COUNT,
// });
// export const decreaceCount = () => ({
//   type: DECREACE_COUNT,
// });

//-----------------------

// import { INCREACE_COUNT, DECREACE_COUNT } from '../constans';

// export const increaceCount = () => ({
//   type: INCREACE_COUNT,
// });
// export const decreaceCount = () => ({
//   type: DECREACE_COUNT,
// });

//---------------------------------------------
import { INCRESE_COUNT, DECRESE_COUNT, GET_LATEST_NEWS, SET_LATEST_NEWS } from '../constans';

export const increaseCount = () => ({
  type: INCRESE_COUNT,
});
export const decreaseCount = () => ({
  type: DECRESE_COUNT,
});
export const getLatestNews = () => ({
  type: GET_LATEST_NEWS,
});
export const settLatestNews = (payload) => ({
  type: SET_LATEST_NEWS,
  payload,
});
