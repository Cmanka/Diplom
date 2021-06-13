import { ITeam } from 'core/interfaces/ITeam';

export interface AddLinkProps {
  open: boolean;
  handleClose(): void;
  onClickAddLink(team: ITeam): void;
  team: ITeam;
}
