import { all, call, fork, put, select, takeLatest } from 'redux-saga/effects';
import * as Action from '../actions/setsuConstants';
import { complete } from '../actions/setsu';
import { pngTobase64 } from '../utils/imageCoverter';
import { getState } from './selectors';

function* runComplete() {
  try {
    const state = yield select(getState);
    // yield call(pngTobase64);
    // yield call(uploadImg, fileName);
    // const id = yield call(writePath);
    // yield put(push(`/setsu/${id}`));
    yield put(complete.succeed({}));
  } catch (error) {
    yield put(complete.fail({ reason: 'error' }));
  }
}

export function* watchComplete() {
  yield takeLatest(Action.COMPLETE_START, runComplete);
}

export default function* rootsaga() {
  yield all([fork(watchComplete)]);
}
