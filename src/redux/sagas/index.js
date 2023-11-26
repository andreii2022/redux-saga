import { takeEvery, put, call, fork, all, race } from 'redux-saga/effects';
import { GET_NEWS } from '../constans';
import { setLatestNews, setPopularNews } from '../ections/ectionCreation';
import { getLatestNews, getPopularNews } from '../../api/index';

export function* handleLatestNews() {
  const { hits } = yield call(getLatestNews, 'react');
  yield put(setLatestNews(hits));
}

export function* handlePopularNews() {
  const { hits } = yield call(getPopularNews);
  yield put(setPopularNews(hits));
}

export function* handleNews() {
  // yield fork(handleLatestNews);
  // yield fork(handlePopularNews);
  yield all(call(handleLatestNews), call(handleLatestNews));
}

export function* watchClickSaga() {
  yield takeEvery(GET_NEWS, handleNews);
}

export default function* rootSaga() {
  yield watchClickSaga();
}
