import { call, put, takeEvery } from '@redux-saga/core/effects';
import { ProjectActionTypes } from 'core/actions/project';
import * as actions from '../actions/project';
import { Action } from '../interfaces/IAction';
import * as services from '../services/project';

function* addProjectWorker(action: Action<ProjectActionTypes>): any {
  try {
    yield call(services.addProjectService, action.payload.data);
    yield put(actions.addProjectSuccess(action.payload.data));
  } catch (e) {
    yield put(actions.addProjectFailed(e.message));
  }
}

function* changeProjectWorker(action: Action<ProjectActionTypes>): any {
  try {
    yield call(services.changeProject, action.payload.data);
    yield put(actions.changeProjectSuccess(action.payload.data));
  } catch (e) {
    yield put(actions.changeProjectFailed(e.message));
  }
}

function* removeProjectWorker(action: Action<ProjectActionTypes>): any {
  try {
    yield call(services.removeProject, action.payload.data);
    yield put(actions.removeProjectSuccess(action.payload.data));
  } catch (e) {
    yield put(actions.removeProjectFailed(e.message));
  }
}

function* fetchProjectsWorker(): any {
  try {
    const projects = yield call(services.fetchProjects);
    yield put(actions.fetchProjectsSuccess(projects));
  } catch (e) {
    yield put(actions.fetchProjectsFailed(e.message));
  }
}

export function* projectWatcher(): Generator {
  yield takeEvery(ProjectActionTypes.ADD_PROJECT, addProjectWorker);
  yield takeEvery(ProjectActionTypes.CHANGE_PROJECT, changeProjectWorker);
  yield takeEvery(ProjectActionTypes.REMOVE_PROJECT, removeProjectWorker);
  yield takeEvery(ProjectActionTypes.FETCH_PROJECTS, fetchProjectsWorker);
}
