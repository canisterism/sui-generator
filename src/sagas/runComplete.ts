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
    const base64 = yield call(createBase64SetsuImage, state);
    const docId = yield call(write, state.textValue.split('\n').join(''));
    yield call(uploadBase64, base64, docId);
    yield put(complete.succeed({ docId: docId }));
    yield put(push(`/setsu/${docId}`));
  } catch (error) {
    yield put(complete.fail({ reason: 'e' }));
  }
}
