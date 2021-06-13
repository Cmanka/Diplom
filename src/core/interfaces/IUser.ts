import { IBookmark } from './IBookmark';

export interface IUser {
  uid: string;
  email: string;
  firstName: string;
  lastName: string;
  position: string;
  location: string;
  organization: string;
  dateRegister: string;
  dateAuthorization: string;
  bookmarks: IBookmark[];
}
