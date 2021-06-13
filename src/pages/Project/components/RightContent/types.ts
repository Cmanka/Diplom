import { IProject } from 'core/interfaces/IProject';
import { ITeam } from 'core/interfaces/ITeam';
import { IUser } from 'core/interfaces/IUser';

export interface RightContentProps {
  project: IProject;
  currentUser: IUser;
  teams: ITeam[];
}

export interface PaperProps {
  arrLength: number;
}
