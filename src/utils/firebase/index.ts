import firebase from 'firebase'; // TODO: split import
import config from './config';

export const firebaseApp = firebase.initializeApp(config);
// export const firebaseDb = firebaseApp.database();
export const firebaseStorage = firebaseApp
  .storage()
  .ref()
  .child('/setsu/');
