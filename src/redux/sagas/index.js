import { takeEvery, put, call, fork, all, race, spawn } from 'redux-saga/effects';
import { GET_NEWS } from '../constans';
import { setLatestNews, setPopularNews } from '../ections/ectionCreation';
import { getLatestNews, getPopularNews } from '../../api/index';

export function* handleLatestNews() {
  try {
    throw new Error();
    const { hits } = yield call(getLatestNews, 'react');
    yield put(setLatestNews(hits));
  } catch {
    throw new Error('Error fetching latest news');
  }
}

export function* handlePopularNews() {
  const { hits } = yield call(getPopularNews);
  yield put(setPopularNews(hits));
}

export function* handleNews() {
  yield spawn(handleLatestNews);
  yield spawn(handlePopularNews);
  // yield all([call(handleLatestNews), call(handlePopularNews)]);
}

export function* watchClickSaga() {
  yield takeEvery(GET_NEWS, handleNews);
}

export default function* rootSaga() {
  yield watchClickSaga();
}
