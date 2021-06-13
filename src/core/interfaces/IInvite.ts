export interface IInvite {
  id: string;
  name: string;
  email: string;
  isConfirmed: boolean;
  inviteTo: 'team' | 'project';
}
