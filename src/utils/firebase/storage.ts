import { firebaseStorage } from './index';

export const uploadBase64 = (
  src: string,
  filename: string
): Promise<string> => {
  const ref = firebaseStorage.child(filename);
  return ref.putString(src).then(snapShot => snapShot.metadata.fullPath);
};
