import * as ActionTypes from './setsuConstants';

interface completeResult {
  docId: string;
}

interface completeError {
  reason: string;
} // TODO: fix Error interface

interface getSetsuUrlComplete {
  url: string;
}
interface getSetsuUrlError {
  reason: string;
} // TODO: fix Error interface

export const changeText = (text: string) => ({
  type: ActionTypes.CHANGE_TEXT as typeof ActionTypes.CHANGE_TEXT,
  payload: { text }
});

export const complete = {
  start: () => ({
    type: ActionTypes.COMPLETE_START as typeof ActionTypes.COMPLETE_START,
    payload: {}
  }),
  succeed: (result: completeResult) => ({
    type: ActionTypes.COMPLETE_SUCCEED as typeof ActionTypes.COMPLETE_SUCCEED,
    payload: {
      docId: result.docId
    }
  }),
  fail: (error: completeError) => ({
    type: ActionTypes.COMPLETE_FAIL as typeof ActionTypes.COMPLETE_FAIL,
    payload: { error },
    error: true
  })
};

export const getSetsuUrl = {
  start: (id: string) => ({
    type: ActionTypes.GET_SETSU_URL_START as typeof ActionTypes.GET_SETSU_URL_START,
    payload: { id }
  }),
  succeed: (result: getSetsuUrlComplete) => ({
    type: ActionTypes.GET_SETSU_URL_SUCCEED as typeof ActionTypes.GET_SETSU_URL_SUCCEED,
    payload: {
      url: result.url
    }
  }),
  fail: (error: getSetsuUrlError) => ({
    type: ActionTypes.GET_SETSU_URL_FAIL as typeof ActionTypes.GET_SETSU_URL_FAIL,
    payload: { error },
    error: true
  })
};

export type SetsuAction =
  | ReturnType<typeof changeText>
  // | ReturnType<typeof changeBgImage>
  | ReturnType<typeof complete.start>
  | ReturnType<typeof complete.succeed>
  | ReturnType<typeof complete.fail>;
