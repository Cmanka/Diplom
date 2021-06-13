import { ProjectActionTypes } from '../actions/project';
import { Action } from '../interfaces/IAction';
import { IProject } from '../interfaces/IProject';

export interface State {
  data: IProject[];
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
  action: Action<ProjectActionTypes>
) => {
  switch (action.type) {
    case ProjectActionTypes.FETCH_PROJECTS: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case ProjectActionTypes.FETCH_PROJECTS_SUCCESS: {
      return {
        ...state,
        data: action.payload.data,
        isLoading: false,
      };
    }
    case ProjectActionTypes.FETCH_PROJECTS_FAILED: {
      return {
        ...state,
        error: action.payload.error,
        isLoading: false,
      };
    }
    case ProjectActionTypes.ADD_PROJECT: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case ProjectActionTypes.ADD_PROJECT_SUCCESS: {
      return {
        ...state,
        data: [...state.data, action.payload.data],
        isLoading: false,
      };
    }
    case ProjectActionTypes.ADD_PROJECT_FAILED: {
      return {
        ...state,
        error: action.payload.error,
        isLoading: false,
      };
    }
    case ProjectActionTypes.CHANGE_PROJECT: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case ProjectActionTypes.CHANGE_PROJECT_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        data: [
          ...state.data.map((project) =>
            project.id === action.payload.data.id
              ? action.payload.data
              : project
          ),
        ],
      };
    }
    case ProjectActionTypes.CHANGE_PROJECT_FAILED: {
      return {
        ...state,
        isLoading: false,
        error: action.payload.error,
      };
    }
    case ProjectActionTypes.REMOVE_PROJECT: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case ProjectActionTypes.REMOVE_PROJECT_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        data: [
          ...state.data.filter((project) => project.id !== action.payload.data),
        ],
      };
    }
    case ProjectActionTypes.REMOVE_PROJECT_FAILED: {
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
