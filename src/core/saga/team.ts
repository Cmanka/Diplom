import { call, put, takeEvery } from '@redux-saga/core/effects';
import { TeamActionTypes } from 'core/actions/team';
import * as actions from '../actions/team';
import { Action } from '../interfaces/IAction';
import * as services from '../services/team';

function* addTeamWorker(action: Action<TeamActionTypes>): any {
  try {
    yield call(services.addTeam, action.payload.data);
    yield put(actions.addTeamSuccess(action.payload.data));
  } catch (e) {
    yield put(actions.addTeamFailed(e.message));
  }
}

function* removeTeamWorker(action: Action<TeamActionTypes>): any {
  try {
    yield call(services.removeTeam, action.payload.data);
    yield put(actions.removeTeamSuccess(action.payload.data));
  } catch (e) {
    yield put(actions.removeTeamFailed(e.message));
  }
}

function* changeTeamWorker(action: Action<TeamActionTypes>): any {
  try {
    yield call(services.changeTeam, action.payload.data);
    yield put(actions.changeTeamSuccess(action.payload.data));
  } catch (e) {
    yield put(actions.changeTeamFailed(e.message));
  }
}

function* fetchTeamsWorker(): any {
  try {
    const boards = yield call(services.fetchTeams);
    yield put(actions.fetchTeamsSuccess(boards));
  } catch (e) {
    yield put(actions.fetchTeamsFailed(e.message));
  }
}

export function* teamWatcher(): Generator {
  yield takeEvery(TeamActionTypes.ADD_TEAM, addTeamWorker);
  yield takeEvery(TeamActionTypes.REMOVE_TEAM, removeTeamWorker);
  yield takeEvery(TeamActionTypes.CHANGE_TEAM, changeTeamWorker);
  yield takeEvery(TeamActionTypes.FETCH_TEAMS, fetchTeamsWorker);
}
