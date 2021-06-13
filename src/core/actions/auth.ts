import { IRegister } from 'core/interfaces/IRegister';
import { Action } from '../interfaces/IAction';
import { IAuth } from '../interfaces/IAuth';

export enum AuthActionTypes {
  LOGIN = '[Auth] LOGIN',
  LOGIN_SUCCESS = '[Auth] LOGIN_SUCCESS',
  LOGIN_FAILED = '[Auth] LOGIN_FAILED',
  REGISTER = '[Auth] REGISTER',
  REGISTER_SUCCESS = '[Auth] REGISTER_SUCCESS',
  REGISTER_FAILED = '[Auth] REGISTER_FAILED',
  LOGOUT = '[Auth] LOGOUT',
}

export const login = (data: IAuth): Action<AuthActionTypes> => {
  return { type: AuthActionTypes.LOGIN, payload: { data } };
};

export const loginSuccess = (uid: string): Action<AuthActionTypes> => {
  return { type: AuthActionTypes.LOGIN_SUCCESS, payload: { uid } };
};

export const loginFailed = (error: string): Action<AuthActionTypes> => {
  return { type: AuthActionTypes.LOGIN_FAILED, payload: { error } };
};

export const register = (data: IRegister): Action<AuthActionTypes> => {
  return { type: AuthActionTypes.REGISTER, payload: { data } };
};

export const registerSuccess = (uid: string): Action<AuthActionTypes> => {
  return { type: AuthActionTypes.REGISTER_SUCCESS, payload: { uid } };
};

export const registerFailed = (error: string): Action<AuthActionTypes> => {
  return {
    type: AuthActionTypes.REGISTER_FAILED,
    payload: { error },
  };
};

export const logout = (): Action<AuthActionTypes> => {
  return {
    type: AuthActionTypes.LOGOUT,
  };
};
