import { IUser } from '../../../../core/interfaces/IUser';

export interface InfoProps {
  isLoading: boolean;
  userData: IUser;
  userAvatar: string;
  isAvatarLoading: boolean;
}
