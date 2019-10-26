import { all, fork, takeLatest } from 'redux-saga/effects';
import * as Action from '../actions/setsuConstants';
import { runComplete } from './runComplete';
import { runGetSetsuUrl } from './runGetSetsuUrl';

export function* watchComplete() {
  yield takeLatest(Action.COMPLETE_START, runComplete);
}
export function* watchGetSetsuUrl() {
  yield takeLatest(Action.GET_SETSU_URL_START, runGetSetsuUrl);
}

export default function* rootsaga() {
  yield all([fork(watchComplete), fork(watchGetSetsuUrl)]);
}
