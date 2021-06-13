import { ITeam } from 'core/interfaces/ITeam';
import { IUser } from 'core/interfaces/IUser';

export interface CreateTeamProps {
  open: boolean;
  handleClose(): void;
  user: IUser;
  onAddTeam(team: ITeam): void;
}
