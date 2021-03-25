import { all, fork } from '@redux-saga/core/effects';
import { authWatcher } from './auth';
import { userWatcher } from './user';

export function* rootSaga(): Generator {
  yield all([fork(authWatcher)]);
  yield all([fork(userWatcher)]);
}
