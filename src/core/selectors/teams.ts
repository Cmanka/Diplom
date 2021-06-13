import { ITeam } from 'core/interfaces/ITeam';
import { createSelector } from 'reselect';
import { AppState } from '../reducers';
import { State } from '../reducers/team';

const selectTeamState = (state: AppState): State => state.team;

export const selectTeamsLoading = createSelector(
  selectTeamState,
  (state) => state.isLoading
);

export const selectTeamsError = createSelector(
  selectTeamState,
  (state) => state.error
);

export const selectTeams = createSelector(
  selectTeamState,
  (state) => state.data
);

export const selectTeamById = (teamId: string) =>
  createSelector(selectTeamState, (state) =>
    state.data.find((team: ITeam) => team.id === teamId)
  );
