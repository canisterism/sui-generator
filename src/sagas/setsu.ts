import { all, call, fork, put, select, takeLatest } from 'redux-saga/effects';
import * as Action from '../actions/setsuConstants';
import { complete } from '../actions/setsu';
import { createBase64SetsuImage } from '../utils/imageCoverter';
import { getState } from './selectors';
import { uploadBase64 } from '../utils/firebase/storage';
import { SetsuState } from '../reducers/setsu';

function* runComplete() {
  try {
    const state: SetsuState = yield select(getState);
    const base64 = yield call(createBase64SetsuImage, state);
    const filePath = yield call(uploadBase64, base64, state.textValue);
    // const id = yield call(filePath);
    // yield put(push(`/setsu/${id}`));
    yield put(complete.succeed({}));
  } catch (error) {
    yield put(complete.fail({ reason: 'e' }));
  }
}

export function* watchComplete() {
  yield takeLatest(Action.COMPLETE_START, runComplete);
}

export default function* rootsaga() {
  yield all([fork(watchComplete)]);
}
