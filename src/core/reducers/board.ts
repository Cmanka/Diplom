import { BoardActionTypes } from '../actions/board';
import { Action } from '../interfaces/IAction';
import { IBoard } from '../interfaces/IBoard';

export interface State {
  data: IBoard[];
  isLoading: boolean;
  error: string;
}

const initialState: State = {
  data: [],
  isLoading: false,
  error: null,
};

export const reducer = (
  state: State = initialState,
  action: Action<BoardActionTypes>
) => {
  switch (action.type) {
    case BoardActionTypes.FETCH_BOARDS: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case BoardActionTypes.FETCH_BOARDS_SUCCESS: {
      return {
        ...state,
        data: action.payload.data,
        isLoading: false,
      };
    }
    case BoardActionTypes.FETCH_BOARDS_FAILED: {
      return {
        ...state,
        error: action.payload.error,
        isLoading: false,
      };
    }
    case BoardActionTypes.ADD_BOARD: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case BoardActionTypes.ADD_BOARD_SUCCESS: {
      return {
        ...state,
        data: [...state.data, action.payload.data],
        isLoading: false,
      };
    }
    case BoardActionTypes.ADD_BOARD_FAILED: {
      return {
        ...state,
        error: action.payload.error,
        isLoading: false,
      };
    }
    case BoardActionTypes.CHANGE_BOARD: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case BoardActionTypes.CHANGE_BOARD_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        data: [
          ...state.data.map((board) =>
            board.id === action.payload.data.id ? action.payload.data : board
          ),
        ],
      };
    }
    case BoardActionTypes.CHANGE_BOARD_FAILED: {
      return {
        ...state,
        isLoading: false,
        error: action.payload.error,
      };
    }
    case BoardActionTypes.REMOVE_BOARD: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case BoardActionTypes.REMOVE_BOARD_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        data: [
          ...state.data.filter((board) => board.id !== action.payload.data),
        ],
      };
    }
    case BoardActionTypes.REMOVE_BOARD_FAILED: {
      return {
        ...state,
        isLoading: false,
        error: action.payload.error,
      };
    }
    default:
      return state;
  }
};
