import { IProject } from 'core/interfaces/IProject';
import { createSelector } from 'reselect';
import { AppState } from '../reducers';
import { State } from '../reducers/project';

const selectProjectState = (state: AppState): State => state.project;

export const selectProjectsLoading = createSelector(
  selectProjectState,
  (state) => state.isLoading
);

export const selectProjectsError = createSelector(
  selectProjectState,
  (state) => state.error
);

export const selectProjects = createSelector(
  selectProjectState,
  (state) => state.data
);

export const selectProjectById = (projectId: string) =>
  createSelector(selectProjectState, (state) =>
    state.data.find((project: IProject) => project.id === projectId)
  );
