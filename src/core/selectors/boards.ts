import { IBoard } from 'core/interfaces/IBoard';
import { createSelector } from 'reselect';
import { AppState } from '../reducers';
import { State } from '../reducers/board';

const selectBoardState = (state: AppState): State => state.board;

export const selectBoardsLoading = createSelector(
  selectBoardState,
  (state) => state.isLoading
);

export const selectBoardsError = createSelector(
  selectBoardState,
  (state) => state.error
);

export const selectBoards = createSelector(
  selectBoardState,
  (state) => state.data
);

export const selectBoardById = (boardId: string) =>
  createSelector(selectBoardState, (state) =>
    state.data.find((board: IBoard) => board.id === boardId)
  );
