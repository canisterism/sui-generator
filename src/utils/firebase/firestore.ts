import { firestore } from './index';

export const write = (text: string): Promise<string> | Promise<Error> => {
  return firestore
    .add({
      text: text,
      created_at: new Date()
    })
    .then(docRef => {
      return docRef.id;
    })
    .catch(e => {
      throw new Error();
    });
};
