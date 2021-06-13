import { ILink } from './ILink';
import { IProject } from './IProject';
import { IUser } from './IUser';

export interface ITeam {
  id: string;
  name: string;
  description: string;
  dateCreate: string;
  creator: IUser;
  projects: IProject[];
  users: IUser[];
  links: ILink[];
}
