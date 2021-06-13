import { IComment } from './IComment';
import { ILane } from './ILane';
import { IUser } from './IUser';

export interface IBoard {
  id: string;
  title: string;
  creator: IUser;
  dateCreate: string;
  lanes: ILane[];
  isPrivate: boolean;
  description?: string;
  comments: IComment[];
  backgroundColor: string;
  users: IUser[];
  teamBoard: boolean;
}
