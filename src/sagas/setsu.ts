import { all, call, fork, put, select, takeLatest } from 'redux-saga/effects';
import * as Action from '../actions/setsuConstants';
import { complete } from '../actions/setsu';
import { getState } from './selectors';
import { SetsuState } from '../reducers/setsu';
import { createBase64SetsuImage } from '../utils/imageCoverter';
import { uploadBase64 } from '../utils/firebase/storage';
import { write } from '../utils/firebase/firestore';

function* runComplete() {
  try {
    const state: SetsuState = yield select(getState);
    const base64 = yield call(createBase64SetsuImage, state);
    const docId = yield call(write, state.textValue.split('\n').join(''));
    yield call(uploadBase64, base64, docId);
    // yield put(push(`/setsu/${id}`));
    yield put(complete.succeed({ docId: docId }));
  } catch (error) {
    debugger;
    yield put(complete.fail({ reason: 'e' }));
  }
}

export function* watchComplete() {
  yield takeLatest(Action.COMPLETE_START, runComplete);
}

export default function* rootsaga() {
  yield all([fork(watchComplete)]);
}
