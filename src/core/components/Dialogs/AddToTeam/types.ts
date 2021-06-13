import { ITeam } from 'core/interfaces/ITeam';

export interface AddToTeamProps {
  open: boolean;
  handleClose(): void;
  team: ITeam;
  onAddToTeam(team: ITeam): void;
}
