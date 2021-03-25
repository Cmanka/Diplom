import { combineReducers } from 'redux';
import * as fromUser from './user';
import * as fromAuth from './auth';
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
}

export const rootReducer = combineReducers<AppState>({
  user: fromUser.reducer,
  auth: fromAuth.reducer,
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
