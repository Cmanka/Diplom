import firebase from 'firebase/app';
import { fbconfig } from '../constants/config';
import 'firebase/auth';
import 'firebase/firestore';

firebase.initializeApp(fbconfig);

export const auth = firebase.auth();

export const firestore = firebase.firestore();

export default firebase;
