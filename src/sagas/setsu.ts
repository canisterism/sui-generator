import { all, call, fork, put, takeLatest } from 'redux-saga/effects';
import * as Action from '../actions/setsuConstants';

function* uploadImageAndTransition(fileName: string) {
  try {
    // must be like this...
    // yield call(createImgBase64);
    // yield call(uploadImg, fileName);
    // const id = yield call(writePath);
    // yield put(push(`/setsu/${id}`));
  } catch (error) {
    // yield puts(calluploadImageAndTransition.fail(error));
  }
}
