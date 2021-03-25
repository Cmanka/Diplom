import { FirebaseCollection } from '../constants/collections';
import { auth, firestore } from '../firebase/index';
import { IAuth } from '../interfaces/IAuth';
import { IUser } from '../interfaces/IUser';

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
}: IAuth): Promise<IUser> => {
  return auth
    .createUserWithEmailAndPassword(email, password)
    .then(({ user }) => {
      const newUser: Omit<IUser, 'uid'> = {
        email,
        firstName,
        lastName,
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
