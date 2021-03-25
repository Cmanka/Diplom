import { Action } from '../interfaces/IAction';
import { IUser } from './../interfaces/IUser';

export enum UserActionTypes {
  USER_PROFILE = `[User] USER_PROFILE`,
  USER_PROFILE_SUCCESS = '[User] USER_PROFILE_SUCCESS',
  USER_PROFILE_FAILED = '[User] USER_PROFILE_FAILED',
  USER_PROFILE_UPDATE = '[User] USER_PROFILE_UPDATE',
  USER_PROFILE_UPDATE_SUCCESS = '[User] USER_PROFILE_UPDATE_SUCCESS',
  USER_PROFILE_UPDATE_FAILED = '[User] USER_PROFILE_UPDATE_FAILED',
  USER_AVATAR = '[User] USER_AVATAR',
  USER_AVATAR_SUCCESS = '[User] USER_AVATAR_SUCCESS',
  USER_AVATAR_FAILED = '[User] USER_AVATAR_FAILED',
  USER_UPDATE_AVATAR = '[User] USER_UPDATE_AVATAR',
  USER_UPDATE_AVATAR_SUCCESS = '[User] USER_UPDATE_AVATAR_SUCCESS',
  USER_UPDATE_AVATAR_FAILED = '[User] USER_UPDATE_AVATAR_FAILED',
  USER_CLEAR_DATA = '[User] USER_CLEAR_DATA',
}

export const userProfile = (): Action<UserActionTypes> => {
  return { type: UserActionTypes.USER_PROFILE };
};

export const userProfileSuccess = (user: IUser): Action<UserActionTypes> => {
  return {
    type: UserActionTypes.USER_PROFILE_SUCCESS,
    payload: { user },
  };
};

export const userProfileFailed = (error: string): Action<UserActionTypes> => {
  return { type: UserActionTypes.USER_PROFILE_FAILED, payload: { error } };
};

export const userProfileUpdate = (user: IUser): Action<UserActionTypes> => {
  return { type: UserActionTypes.USER_PROFILE_UPDATE, payload: { user } };
};

export const userProfileUpdateSuccess = (
  user: IUser
): Action<UserActionTypes> => {
  return {
    type: UserActionTypes.USER_PROFILE_UPDATE_SUCCESS,
    payload: { user },
  };
};

export const userProfileUpdateFailed = (
  error: string
): Action<UserActionTypes> => {
  return {
    type: UserActionTypes.USER_PROFILE_UPDATE_FAILED,
    payload: { error },
  };
};

export const userAvatar = (): Action<UserActionTypes> => {
  return { type: UserActionTypes.USER_AVATAR };
};

export const userAvatarSuccess = (avatar: string): Action<UserActionTypes> => {
  return { type: UserActionTypes.USER_AVATAR_SUCCESS, payload: { avatar } };
};

export const userAvatarFailed = (error: string): Action<UserActionTypes> => {
  return { type: UserActionTypes.USER_AVATAR_FAILED, payload: { error } };
};

export const userUpdateAvatar = (file: File): Action<UserActionTypes> => {
  return { type: UserActionTypes.USER_UPDATE_AVATAR, payload: { file } };
};

export const userUpdateAvatarSuccess = (): Action<UserActionTypes> => {
  return { type: UserActionTypes.USER_UPDATE_AVATAR_SUCCESS };
};

export const userUpdateAvatarFailed = (
  error: string
): Action<UserActionTypes> => {
  return {
    type: UserActionTypes.USER_UPDATE_AVATAR_FAILED,
    payload: { error },
  };
};

export const userClearData = (): Action<UserActionTypes> => {
  return { type: UserActionTypes.USER_CLEAR_DATA };
};
