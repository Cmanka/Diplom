import { Action } from 'core/interfaces/IAction';
import { ITeam } from 'core/interfaces/ITeam';

export enum TeamActionTypes {
  FETCH_TEAMS = '[Team] FETCH_TEAMS',
  FETCH_TEAMS_SUCCESS = '[Team] FETCH_TEAMS_SUCCESS',
  FETCH_TEAMS_FAILED = '[Team] FETCH_TEAMS_FAILED',
  ADD_TEAM = '[Team] ADD_TEAM',
  ADD_TEAM_SUCCESS = '[Team] ADD_TEAM_SUCCESS',
  ADD_TEAM_FAILED = '[Team] ADD_TEAM_FAILED',
  CHANGE_TEAM = '[Team] CHANGE_TEAM',
  CHANGE_TEAM_SUCCESS = '[Team] CHANGE_TEAM_SUCCESS',
  CHANGE_TEAM_FAILED = '[Team] CHANGE_TEAM_FAILED',
  REMOVE_TEAM = '[Team] REMOVE_TEAM',
  REMOVE_TEAM_SUCCESS = '[Team] REMOVE_TEAM_SUCCESS',
  REMOVE_TEAM_FAILED = '[Team] REMOVE_TEAM_FAILED',
}

export const fetchTeams = (): Action<TeamActionTypes> => {
  return { type: TeamActionTypes.FETCH_TEAMS };
};

export const fetchTeamsSuccess = (teams: ITeam[]): Action<TeamActionTypes> => {
  return {
    type: TeamActionTypes.FETCH_TEAMS_SUCCESS,
    payload: { data: teams },
  };
};

export const fetchTeamsFailed = (error: string): Action<TeamActionTypes> => {
  return {
    type: TeamActionTypes.FETCH_TEAMS_FAILED,
    payload: { error },
  };
};

export const addTeam = (team: ITeam): Action<TeamActionTypes> => {
  return { type: TeamActionTypes.ADD_TEAM, payload: { data: team } };
};

export const addTeamSuccess = (team: ITeam): Action<TeamActionTypes> => {
  return { type: TeamActionTypes.ADD_TEAM_SUCCESS, payload: { data: team } };
};

export const addTeamFailed = (error: string): Action<TeamActionTypes> => {
  return { type: TeamActionTypes.ADD_TEAM_FAILED, payload: { error } };
};

export const changeTeam = (team: ITeam): Action<TeamActionTypes> => {
  return { type: TeamActionTypes.CHANGE_TEAM, payload: { data: team } };
};

export const changeTeamSuccess = (team: ITeam): Action<TeamActionTypes> => {
  return {
    type: TeamActionTypes.CHANGE_TEAM_SUCCESS,
    payload: { data: team },
  };
};

export const changeTeamFailed = (error: string): Action<TeamActionTypes> => {
  return { type: TeamActionTypes.CHANGE_TEAM_FAILED, payload: { error } };
};

export const removeTeam = (teamId: string): Action<TeamActionTypes> => {
  return { type: TeamActionTypes.REMOVE_TEAM, payload: { data: teamId } };
};

export const removeTeamSuccess = (teamId: string): Action<TeamActionTypes> => {
  return {
    type: TeamActionTypes.REMOVE_TEAM_SUCCESS,
    payload: { data: teamId },
  };
};

export const removeTeamFailed = (error: string): Action<TeamActionTypes> => {
  return { type: TeamActionTypes.REMOVE_TEAM_FAILED, payload: { error } };
};
