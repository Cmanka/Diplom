import { Action } from '../interfaces/IAction';
import { IBoard } from '../interfaces/IBoard';

export enum BoardActionTypes {
  FETCH_BOARDS = '[Board] FETCH_BOARDS',
  FETCH_BOARDS_SUCCESS = '[Board] FETCH_BOARDS_SUCCESS',
  FETCH_BOARDS_FAILED = '[Board] FETCH_BOARDS_FAILED',
  ADD_BOARD = '[Board] ADD_BOARD',
  ADD_BOARD_SUCCESS = '[Board] ADD_BOARD_SUCCESS',
  ADD_BOARD_FAILED = '[Board] ADD_BOARD_FAILED',
  CHANGE_BOARD = '[Board] CHANGE_BOARD',
  CHANGE_BOARD_SUCCESS = '[Board] CHANGE_BOARD_SUCCESS',
  CHANGE_BOARD_FAILED = '[Board] CHANGE_BOARD_FAILED',
  REMOVE_BOARD = '[Board] REMOVE_BOARD',
  REMOVE_BOARD_SUCCESS = '[Board] REMOVE_BOARD_SUCCESS',
  REMOVE_BOARD_FAILED = '[Board] REMOVE_BOARD_FAILED',
}

export const fetchBoards = (): Action<BoardActionTypes> => {
  return { type: BoardActionTypes.FETCH_BOARDS };
};

export const fetchBoardsSuccess = (
  boards: IBoard[]
): Action<BoardActionTypes> => {
  return {
    type: BoardActionTypes.FETCH_BOARDS_SUCCESS,
    payload: { data: boards },
  };
};

export const fetchBoardsFailed = (error: string): Action<BoardActionTypes> => {
  return { type: BoardActionTypes.FETCH_BOARDS_FAILED, payload: { error } };
};

export const addBoard = (board: IBoard): Action<BoardActionTypes> => {
  return { type: BoardActionTypes.ADD_BOARD, payload: { data: board } };
};

export const addBoardSuccess = (board: IBoard): Action<BoardActionTypes> => {
  return { type: BoardActionTypes.ADD_BOARD_SUCCESS, payload: { data: board } };
};

export const addBoardFailed = (error: string): Action<BoardActionTypes> => {
  return { type: BoardActionTypes.ADD_BOARD_FAILED, payload: { error } };
};

export const changeBoard = (board: IBoard): Action<BoardActionTypes> => {
  return { type: BoardActionTypes.CHANGE_BOARD, payload: { data: board } };
};

export const changeBoardSuccess = (board: IBoard): Action<BoardActionTypes> => {
  return {
    type: BoardActionTypes.CHANGE_BOARD_SUCCESS,
    payload: { data: board },
  };
};

export const changeBoardFailed = (error: string): Action<BoardActionTypes> => {
  return { type: BoardActionTypes.CHANGE_BOARD_FAILED, payload: { error } };
};

export const removeBoard = (boardId: string): Action<BoardActionTypes> => {
  return { type: BoardActionTypes.REMOVE_BOARD, payload: { data: boardId } };
};

export const removeBoardSuccess = (
  boardId: string
): Action<BoardActionTypes> => {
  return {
    type: BoardActionTypes.REMOVE_BOARD_SUCCESS,
    payload: { data: boardId },
  };
};

export const removeBoardFailed = (error: string): Action<BoardActionTypes> => {
  return { type: BoardActionTypes.REMOVE_BOARD_FAILED, payload: { error } };
};
