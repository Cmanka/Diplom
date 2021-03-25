import { call, put, takeEvery } from '@redux-saga/core/effects';
import {
  UserActionTypes,
  userAvatar,
  userAvatarFailed,
  userAvatarSuccess,
  userProfileFailed,
  userProfileSuccess,
  userProfileUpdateFailed,
  userProfileUpdateSuccess,
  userUpdateAvatarFailed,
  userUpdateAvatarSuccess,
} from '../actions/user';
import { Action } from '../interfaces/IAction';
import {
  getUser,
  getUserAvatar,
  updateUser,
  updateUserAvatar,
} from '../services/user';
import { auth } from '../firebase/index';

function* getUserWorker(): any {
  try {
    const data = yield call(getUser, auth.currentUser.uid);
    yield put(userProfileSuccess(data));
    yield put(userAvatar());
  } catch (e) {
    yield put(userProfileFailed(e.message));
  }
}

function* updateUserWorker(action: Action<UserActionTypes>) {
  try {
    yield call(updateUser, action.payload.user);
    yield put(userProfileUpdateSuccess(action.payload.user));
  } catch (e) {
    yield put(userProfileUpdateFailed(e.message));
  }
}

function* getUserAvatarWorker(): any {
  try {
    const data = yield call(getUserAvatar, auth.currentUser.uid);
    yield put(userAvatarSuccess(data));
  } catch (e) {
    yield put(userAvatarFailed(e.message));
  }
}

function* updateUserAvatarWorker(action: Action<UserActionTypes>) {
  try {
    yield call(updateUserAvatar, auth.currentUser.uid, action.payload.file);
    yield put(userUpdateAvatarSuccess());
    yield put(userAvatar());
  } catch (e) {
    yield put(userUpdateAvatarFailed(e.message));
  }
}

export function* userWatcher(): Generator {
  yield takeEvery(UserActionTypes.USER_PROFILE, getUserWorker);
  yield takeEvery(UserActionTypes.USER_PROFILE_UPDATE, updateUserWorker);
  yield takeEvery(UserActionTypes.USER_AVATAR, getUserAvatarWorker);
  yield takeEvery(UserActionTypes.USER_UPDATE_AVATAR, updateUserAvatarWorker);
}
