import * as ActionTypes from './setsuConstants';

interface completeResult {
  // base64: string;
}

interface completeError {
  reason: string;
} // TODO: fix Error interface

export const changeText = (text: string) => ({
  type: ActionTypes.CHANGE_TEXT as typeof ActionTypes.CHANGE_TEXT,
  payload: { text }
});

export const changeBgImage = (src: string) => ({
  type: ActionTypes.CHANGE_BG_IMAGE_URL as typeof ActionTypes.CHANGE_BG_IMAGE_URL,
  payload: { src }
});

export const complete = {
  start: () => ({
    type: ActionTypes.COMPLETE_START as typeof ActionTypes.COMPLETE_START,
    payload: {}
  }),
  succeed: (result: completeResult) => ({
    type: ActionTypes.COMPLETE_SUCCEED as typeof ActionTypes.COMPLETE_SUCCEED
  }),
  fail: (error: completeError) => ({
    type: ActionTypes.COMPLETE_FAIL as typeof ActionTypes.COMPLETE_FAIL,
    payload: { error },
    error: true
  })
};

export type SetsuAction =
  | ReturnType<typeof changeText>
  | ReturnType<typeof changeBgImage>
  | ReturnType<typeof complete.start>
  | ReturnType<typeof complete.succeed>
  | ReturnType<typeof complete.fail>;
