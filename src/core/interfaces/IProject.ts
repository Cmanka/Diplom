import { IBoard } from './IBoard';
import { ITeam } from './ITeam';
import { IUser } from './IUser';

export interface IProject {
  id: string;
  name: string;
  dateCreate: string;
  creator: IUser;
  users: IUser[];
  boards: IBoard[];
  teams: ITeam[];
}
