// export default function* rootSaga() {
//   console.log('Hello world');
//   yield;
// }

import { takeEvery, put } from '@redux-saga/core/effects';
import { getLatestNews } from '../../api/insex';
import { GET_LATEST_NEWS } from '../../redux/constans';
import { settLatestNews } from '../ections/ectionCreation';

export function* workerSaga() {
  const { hits } = yield getLatestNews();
  yield put(settLatestNews(hits));
}
export function* watchClickSaga() {
  yield takeEvery(GET_LATEST_NEWS, workerSaga);
}

export default function* rootSaga() {
  yield watchClickSaga();
}
