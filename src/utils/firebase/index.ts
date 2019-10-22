import * as firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';
import config from './config';

export const firebaseApp = firebase.initializeApp(config);
// export const firebaseDb = firebaseApp.database();
export const firebaseStorage = firebaseApp
  .storage()
  .ref()
  .child('/setsu/');
