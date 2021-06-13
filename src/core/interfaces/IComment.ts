import { IUser } from './IUser';

export interface IComment {
  id: string;
  text: string;
  dateCreate: string;
  user: IUser;
}
