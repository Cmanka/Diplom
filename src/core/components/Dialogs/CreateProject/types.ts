import { IProject } from 'core/interfaces/IProject';
import { IUser } from 'core/interfaces/IUser';

export interface CreateProjectProps {
  open: boolean;
  handleClose(): void;
  user: IUser;
  onAddProject(project: IProject): void;
}
