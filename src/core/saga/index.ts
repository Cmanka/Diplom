import { all, fork } from '@redux-saga/core/effects';
import { authWatcher } from './auth';
import { boardWatcher } from './board';
import { userWatcher } from './user';
import { teamWatcher } from './team';
import { projectWatcher } from './project';

export function* rootSaga(): Generator {
  yield all([fork(authWatcher)]);
  yield all([fork(userWatcher)]);
  yield all([fork(boardWatcher)]);
  yield all([fork(teamWatcher)]);
  yield all([fork(projectWatcher)]);
}
