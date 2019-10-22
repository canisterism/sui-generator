import { all, call, fork, put, select, takeLatest } from 'redux-saga/effects';
import * as Action from '../actions/setsuConstants';
import { complete, getSetsuUrl } from '../actions/setsu';
import { getState } from './selectors';
import { SetsuState } from '../reducers/setsu';
import { createBase64SetsuImage } from '../utils/imageCoverter';
import { uploadBase64 } from '../utils/firebase/storage';
import { fetch } from '../utils/firebase/storage';
import { write } from '../utils/firebase/firestore';
import { push } from 'connected-react-router';

function* runComplete() {
  try {
    const state: SetsuState = yield select(getState);
    // const base64 = yield call(createBase64SetsuImage, state);
    // const docId = yield call(write, state.textValue.split('\n').join(''));
    // yield call(uploadBase64, base64, docId);

    const docId = 'g9WxzAOVEqgArDdjgow2';

    yield put(complete.succeed({ docId: docId }));
    yield put(push(`/setsu/${docId}`));
  } catch (error) {
    yield put(complete.fail({ reason: 'e' }));
  }
}

export function* watchComplete() {
  yield takeLatest(Action.COMPLETE_START, runComplete);
}
function* runGetSetsuUrl(action: ReturnType<typeof getSetsuUrl.start>) {
  try {
    const id = action.payload.id;
    const url = yield call(fetch, id);
    yield put(getSetsuUrl.succeed({ url }));
  } catch (error) {
    yield put(getSetsuUrl.fail(error));
  }
}

export function* watchGetSetsuUrl() {
  yield takeLatest(Action.GET_SETSU_URL_START, runGetSetsuUrl);
}

export default function* rootsaga() {
  yield all([fork(watchComplete), fork(watchGetSetsuUrl)]);
}
