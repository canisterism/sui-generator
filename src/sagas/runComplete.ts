import { call, put, select } from 'redux-saga/effects';
import { complete } from '../actions/setsu';
import { getState } from './selectors';
import { SetsuState } from '../reducers/setsu';
import { createBase64SetsuImage } from '../utils/imageCoverter';
import { uploadBase64 } from '../utils/firebase/storage';
import { write } from '../utils/firebase/firestore';
import { push } from 'connected-react-router';
export function* runComplete() {
  try {
    const state: SetsuState = yield select(getState);
    console.log({ state });
    const base64 = yield call(createBase64SetsuImage, state);
    console.log('has created base64 image, writing to firestore...');
    const docId = yield call(write, state.textValue.split('\n').join(''));
    console.log('has written to firestore and fetched docid: ');
    console.log({ docId });
    console.log('uploading base64 image...');
    yield call(uploadBase64, base64, docId);
    console.log('upload has completed, dipatching complete.succeed action...');
    yield put(complete.succeed({ docId: docId }));
    console.log('pushing to create setsu URL...');
    yield put(push(`/setsu/${docId}`));
  } catch (error) {
    console.error('runComplete has failed! below is error log...');
    console.error({ error });
    yield put(complete.fail(error));
    yield put(push(`/`));
  }
}
