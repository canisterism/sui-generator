import { all, call, fork, put, takeLatest } from 'redux-saga/effects';
import * as Action from '../actions/setsuConstants';
import { complete } from '../actions/setsu';

function* runComplete() {
  try {
    // must be like this...
    // yield call(createImgBase64);
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
