import { call, put, takeEvery } from '@redux-saga/core/effects';
import {
  AuthActionTypes,
  loginFailed,
  loginSuccess,
  registerSuccess,
  registerFailed,
  logout,
} from '../actions/auth';
import { Action } from '../interfaces/IAction';
import { login, logout as logoutServ, register } from '../services/auth';

function* loginWorker(action: Action<AuthActionTypes>): any {
  try {
    const uid = yield call(login, { ...action.payload.data });
    yield put(loginSuccess(uid));
  } catch (e) {
    yield put(loginFailed(e.message));
  }
}

function* registerWorker(action: Action<AuthActionTypes>): any {
  try {
    const data = yield call(register, action.payload.data);
    yield put(registerSuccess(data.uid));
  } catch (e) {
    yield put(registerFailed(e.message));
  }
}

function* logoutWorker() {
  yield call(logoutServ);
  return put(logout());
}

export function* authWatcher(): Generator {
  yield takeEvery(AuthActionTypes.LOGIN, loginWorker);
  yield takeEvery(AuthActionTypes.REGISTER, registerWorker);
  yield takeEvery(AuthActionTypes.LOGOUT, logoutWorker);
}
