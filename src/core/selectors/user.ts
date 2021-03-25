import { AppState } from '../reducers';
import { createSelector } from 'reselect';

const selectUserState = (state: AppState) => state.user;

export const selectUserLoadingState = createSelector(
  selectUserState,
  (state) => state.isLoading
);

export const selectUserDataState = createSelector(
  selectUserState,
  (state) => state.data
);

export const selectUserAvatarLoadingState = createSelector(
  selectUserState,
  (state) => state.isAvatarLoading
);

export const selectUserAvatarState = createSelector(
  selectUserState,
  (state) => state.avatar
);
