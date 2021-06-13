import { FirebaseCollection } from '../constants/collections';
import { auth, firestore } from '../firebase/index';
import { IAuth } from '../interfaces/IAuth';
import { IUser } from '../interfaces/IUser';
import { format } from 'date-fns';
import { IRegister } from 'core/interfaces/IRegister';

export const login = ({ email, password }: IAuth): Promise<string> => {
  return auth
    .signInWithEmailAndPassword(email, password)
    .then(({ user }) => user.uid);
};

export const register = ({
  email,
  password,
  firstName,
  lastName,
  location,
  organization,
  position,
}: IRegister): Promise<IUser> => {
  return auth
    .createUserWithEmailAndPassword(email, password)
    .then(({ user }) => {
      const newUser: IUser = {
        uid: user.uid,
        email,
        firstName,
        lastName,
        dateRegister: format(new Date(), 'dd MMM yyyy HH:mm'),
        dateAuthorization: format(new Date(), 'dd MMM yyyy HH:mm'),
        location: location ? location : '',
        organization: organization ? organization : '',
        position: position ? position : '',
        bookmarks: [],
      };
      return firestore
        .collection(FirebaseCollection.Users)
        .doc(user.uid)
        .set(newUser)
        .then(() =>
          user.getIdTokenResult().then(() => ({
            ...newUser,
            uid: user.uid,
          }))
        );
    });
};

export const logout = (): Promise<void> => auth.signOut();
