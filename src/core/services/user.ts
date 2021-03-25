import { IUser } from '../interfaces/IUser';
import { auth, firestore } from '../firebase';
import { FirebaseCollection } from '../constants/collections';
import firebase from '../firebase';
import 'firebase/storage';

export const getUser = (userId: string): Promise<IUser> =>
  firestore
    .collection(FirebaseCollection.Users)
    .doc(userId)
    .get()
    .then((snapshot) => snapshot.data() as IUser)
    .then((data) => ({
      ...data,
      uid: userId,
    }));

export const updateUser = ({ firstName, lastName }: IUser): Promise<void> =>
  firestore
    .collection(FirebaseCollection.Users)
    .doc(auth.currentUser.uid)
    .update({ firstName, lastName });

export const getUserAvatar = (uid: string): Promise<string> =>
  firebase.storage().ref(`user/${uid}/profile-picture`).getDownloadURL();

export const updateUserAvatar = (
  uid: string,
  file: File
): firebase.storage.UploadTask =>
  firebase.storage().ref(`user/${uid}/profile-picture`).put(file);
