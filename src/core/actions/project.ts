import { Action } from '../interfaces/IAction';
import { IProject } from '../interfaces/IProject';

export enum ProjectActionTypes {
  FETCH_PROJECTS = '[Project] FETCH_PROJECTS',
  FETCH_PROJECTS_SUCCESS = '[Project] FETCH_PROJECTS_SUCCESS',
  FETCH_PROJECTS_FAILED = '[Project] FETCH_PROJECTS_FAILED',
  ADD_PROJECT = '[Project] ADD_PROJECT',
  ADD_PROJECT_SUCCESS = '[Project] ADD_PROJECT_SUCCESS',
  ADD_PROJECT_FAILED = '[Project] ADD_PROJECT_FAILED',
  CHANGE_PROJECT = '[Project] CHANGE_PROJECT',
  CHANGE_PROJECT_SUCCESS = '[Project] CHANGE_PROJECT_SUCCESS',
  CHANGE_PROJECT_FAILED = '[Project] CHANGE_PROJECT_FAILED',
  REMOVE_PROJECT = '[Project] REMOVE_PROJECT',
  REMOVE_PROJECT_SUCCESS = '[Project] REMOVE_PROJECT_SUCCESS',
  REMOVE_PROJECT_FAILED = '[Project] REMOVE_PROJECT_FAILED',
}

export const fetchProjects = (): Action<ProjectActionTypes> => {
  return { type: ProjectActionTypes.FETCH_PROJECTS };
};

export const fetchProjectsSuccess = (
  projects: IProject[]
): Action<ProjectActionTypes> => {
  return {
    type: ProjectActionTypes.FETCH_PROJECTS_SUCCESS,
    payload: { data: projects },
  };
};

export const fetchProjectsFailed = (
  error: string
): Action<ProjectActionTypes> => {
  return { type: ProjectActionTypes.FETCH_PROJECTS_FAILED, payload: { error } };
};

export const addProject = (project: IProject): Action<ProjectActionTypes> => {
  return { type: ProjectActionTypes.ADD_PROJECT, payload: { data: project } };
};

export const addProjectSuccess = (
  project: IProject
): Action<ProjectActionTypes> => {
  return {
    type: ProjectActionTypes.ADD_PROJECT_SUCCESS,
    payload: { data: project },
  };
};

export const addProjectFailed = (error: string): Action<ProjectActionTypes> => {
  return { type: ProjectActionTypes.ADD_PROJECT_FAILED, payload: { error } };
};

export const changeProject = (
  project: IProject
): Action<ProjectActionTypes> => {
  return {
    type: ProjectActionTypes.CHANGE_PROJECT,
    payload: { data: project },
  };
};

export const changeProjectSuccess = (
  project: IProject
): Action<ProjectActionTypes> => {
  return {
    type: ProjectActionTypes.CHANGE_PROJECT_SUCCESS,
    payload: { data: project },
  };
};

export const changeProjectFailed = (
  error: string
): Action<ProjectActionTypes> => {
  return { type: ProjectActionTypes.CHANGE_PROJECT_FAILED, payload: { error } };
};

export const removeProject = (
  projectId: string
): Action<ProjectActionTypes> => {
  return {
    type: ProjectActionTypes.REMOVE_PROJECT,
    payload: { data: projectId },
  };
};

export const removeProjectSuccess = (
  projectId: string
): Action<ProjectActionTypes> => {
  return {
    type: ProjectActionTypes.REMOVE_PROJECT_SUCCESS,
    payload: { data: projectId },
  };
};

export const removeProjectFailed = (
  error: string
): Action<ProjectActionTypes> => {
  return { type: ProjectActionTypes.REMOVE_PROJECT_FAILED, payload: { error } };
};
