import { AuthActionTypes } from '../actions/auth';
import { Action } from '../interfaces/IAction';

export interface State {
  data: {
    uid: string;
  };
  isLoading: boolean;
  error: string;
}

const initialState: State = {
  data: null,
  isLoading: false,
  error: null,
};

export const reducer = (
  state: State = initialState,
  action: Action<AuthActionTypes>
): State => {
  switch (action.type) {
    case AuthActionTypes.LOGIN: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case AuthActionTypes.LOGIN_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        error: null,
        data: {
          uid: action.payload.uid,
        },
      };
    }
    case AuthActionTypes.LOGIN_FAILED: {
      return {
        ...state,
        isLoading: false,
        error: action.payload.error,
      };
    }
    case AuthActionTypes.REGISTER: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case AuthActionTypes.REGISTER_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        error: null,
        data: {
          uid: action.payload.uid,
        },
      };
    }
    case AuthActionTypes.REGISTER_FAILED: {
      return {
        ...state,
        isLoading: false,
        error: action.payload.error,
      };
    }
    case AuthActionTypes.LOGOUT: {
      return initialState;
    }
    default: {
      return state;
    }
  }
};
