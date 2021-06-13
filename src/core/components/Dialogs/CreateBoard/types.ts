import { IBoard } from 'core/interfaces/IBoard';
import { IUser } from 'core/interfaces/IUser';

export interface CreateBoardProps {
  open: boolean;
  handleClose(): void;
  user: IUser;
  onAddBoard(board: IBoard): void;
}
