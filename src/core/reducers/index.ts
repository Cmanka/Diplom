import { combineReducers } from 'redux';
import * as fromUser from './user';
import * as fromAuth from './auth';
import * as fromBoard from './board';
import * as fromTeam from './team';
import * as fromProj from './project';
import { composeWithDevTools } from 'redux-devtools-extension';
import { applyMiddleware, createStore } from 'redux';
import firebase from '../firebase';
import { rrfconfig } from '../constants/config';
import { createFirestoreInstance } from 'redux-firestore';
import 'firebase/firestore';
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from '../saga';

const sagaMIddleware = createSagaMiddleware();

export interface AppState {
  user: fromUser.State;
  auth: fromAuth.State;
  board: fromBoard.State;
  team: fromTeam.State;
  project: fromProj.State;
}

export const rootReducer = combineReducers<AppState>({
  user: fromUser.reducer,
  auth: fromAuth.reducer,
  board: fromBoard.reducer,
  team: fromTeam.reducer,
  project: fromProj.reducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMIddleware))
);

sagaMIddleware.run(rootSaga);

export const rrfProps = {
  firebase,
  config: rrfconfig,
  dispatch: store.dispatch,
  createFirestoreInstance,
};
