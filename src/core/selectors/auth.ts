import { createSelector } from 'reselect';
import { AppState } from '../reducers';
import { State } from '../reducers/auth';

const selectAuthState = (state: AppState): State => state.auth;

export const selectAuthLoadingState = createSelector(
  selectAuthState,
  (state) => state.isLoading
);

export const selectAuthErrorState = createSelector(
  selectAuthState,
  (state) => state.error
);

export const selectAuthData = createSelector(
  selectAuthState,
  (state) => state.data
);
