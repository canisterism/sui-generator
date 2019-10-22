import { firebaseStorage } from './index';

export const uploadBase64 = (
  src: string,
  filename: string
): Promise<string> | Promise<Error> => {
  const ref = firebaseStorage.child(filename.split('\n').join(''));
  return ref
    .putString(src, 'data_url')
    .then(snapShot => {
      return snapShot.metadata.fullPath;
    })
    .catch(e => {
      console.log(e);
      throw new Error();
    });
};
