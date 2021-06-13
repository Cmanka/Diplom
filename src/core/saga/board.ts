import { call, put, takeEvery } from '@redux-saga/core/effects';
import { BoardActionTypes } from 'core/actions/board';
import * as actions from '../actions/board';
import { Action } from '../interfaces/IAction';
import * as services from '../services/board';

function* addBoardWorker(action: Action<BoardActionTypes>): any {
  try {
    yield call(services.addBoardService, action.payload.data);
    yield put(actions.addBoardSuccess(action.payload.data));
  } catch (e) {
    yield put(actions.addBoardFailed(e.message));
  }
}

function* changeBoardWorker(action: Action<BoardActionTypes>): any {
  try {
    yield call(services.changeBoard, action.payload.data);
    yield put(actions.changeBoardSuccess(action.payload.data));
  } catch (e) {
    yield put(actions.changeBoardFailed(e.message));
  }
}

function* removeBoardWorker(action: Action<BoardActionTypes>): any {
  try {
    yield call(services.removeBoard, action.payload.data);
    yield put(actions.removeBoardSuccess(action.payload.data));
  } catch (e) {
    yield put(actions.removeBoardFailed(e.message));
  }
}

function* fetchBoardsWorker(): any {
  try {
    const boards = yield call(services.fetchBoards);
    yield put(actions.fetchBoardsSuccess(boards));
  } catch (e) {
    yield put(actions.fetchBoardsFailed(e.message));
  }
}

export function* boardWatcher(): Generator {
  yield takeEvery(BoardActionTypes.ADD_BOARD, addBoardWorker);
  yield takeEvery(BoardActionTypes.CHANGE_BOARD, changeBoardWorker);
  yield takeEvery(BoardActionTypes.REMOVE_BOARD, removeBoardWorker);
  yield takeEvery(BoardActionTypes.FETCH_BOARDS, fetchBoardsWorker);
}
