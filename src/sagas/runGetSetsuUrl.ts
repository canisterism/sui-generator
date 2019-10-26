import { call, put } from 'redux-saga/effects';
import { getSetsuUrl } from '../actions/setsu';
import { fetch } from '../utils/firebase/storage';
import { push } from 'connected-react-router';
export function* runGetSetsuUrl(action: ReturnType<typeof getSetsuUrl.start>) {
  try {
    const id = action.payload.id;
    const url = yield call(fetch, id);
    yield put(getSetsuUrl.succeed({ url }));
  } catch (error) {
    yield put(getSetsuUrl.fail(error));
    yield put(push(`/`));
  }
}
