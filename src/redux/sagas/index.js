// export default function* rootSaga() {
//   console.log('Hello world');
//   yield;
// }

import { take } from '@redux-saga/core/effects';
import { INCREACE_COUNT, DECREACE_COUNT } from '../constans';

export function* workerSaga() {}

export function* watchClickSaga() {
  yield take(INCREACE_COUNT);
  console.log('request 1');
  yield take(DECREACE_COUNT);
  console.log('request 2');
}

export default function* rootSaga() {
  yield watchClickSaga();
}
