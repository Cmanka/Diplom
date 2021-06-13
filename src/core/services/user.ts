import { IUser } from '../interfaces/IUser';
import { firestore } from '../firebase';
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

export const updateUser = (user: IUser): Promise<void> =>
  firestore
    .collection(FirebaseCollection.Users)
    .doc(user.uid)
    .update({ ...user });

export const getUserAvatar = (uid: string): Promise<string> =>
  firebase.storage().ref(`user/${uid}/profile-picture`).getDownloadURL();

export const updateUserAvatar = (
  uid: string,
  file: File
): firebase.storage.UploadTask =>
  firebase.storage().ref(`user/${uid}/profile-picture`).put(file);

export const fetchUsers = () =>
  firestore
    .collection(FirebaseCollection.Users)
    .get()
    .then(async (querySnapshot) => {
      const users: IUser[] = [];
      await querySnapshot.forEach((doc) => users.push(doc.data() as IUser));
      return users;
    });
