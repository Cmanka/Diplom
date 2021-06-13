import { ITeam } from 'core/interfaces/ITeam';
import { TeamActionTypes } from '../actions/team';
import { Action } from '../interfaces/IAction';

export interface State {
  data: ITeam[];
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
  action: Action<TeamActionTypes>
) => {
  switch (action.type) {
    case TeamActionTypes.FETCH_TEAMS: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case TeamActionTypes.FETCH_TEAMS_SUCCESS: {
      return {
        ...state,
        data: action.payload.data,
        isLoading: false,
      };
    }
    case TeamActionTypes.FETCH_TEAMS_FAILED: {
      return {
        ...state,
        error: action.payload.error,
        isLoading: false,
      };
    }
    case TeamActionTypes.ADD_TEAM: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case TeamActionTypes.ADD_TEAM_SUCCESS: {
      return {
        ...state,
        data: [...state.data, action.payload.data],
        isLoading: false,
      };
    }
    case TeamActionTypes.ADD_TEAM_FAILED: {
      return {
        ...state,
        error: action.payload.error,
        isLoading: false,
      };
    }
    case TeamActionTypes.CHANGE_TEAM: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case TeamActionTypes.CHANGE_TEAM_SUCCESS: {
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
    case TeamActionTypes.CHANGE_TEAM_FAILED: {
      return {
        ...state,
        isLoading: false,
        error: action.payload.error,
      };
    }
    case TeamActionTypes.REMOVE_TEAM: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case TeamActionTypes.REMOVE_TEAM_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        data: [...state.data.filter((team) => team.id !== action.payload.data)],
      };
    }
    case TeamActionTypes.REMOVE_TEAM_FAILED: {
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
