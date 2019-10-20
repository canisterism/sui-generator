import * as ActionTypes from './setsuConstants';

// Actions to create png
interface createPngResult {
  base64: string;
}

interface createPngError {} // TODO: fix Error interface

export const changeText = (text: string) => ({
  type: ActionTypes.CHANGE_TEXT as typeof ActionTypes.CHANGE_TEXT,
  payload: { text }
});

export const changeBgImage = (src: string) => ({
  type: ActionTypes.CHANGE_BG_IMAGE_URL as typeof ActionTypes.CHANGE_BG_IMAGE_URL,
  payload: { src }
});

export const createPng = {
  start: () => ({
    type: ActionTypes.CREATE_PNG_START as typeof ActionTypes.CREATE_PNG_START,
    payload: {}
  }),
  succeed: (result: createPngResult) => ({
    type: ActionTypes.CREATE_PNG_SUCCEED as typeof ActionTypes.CREATE_PNG_SUCCEED,
    payload: { result }
  }),
  fail: (error: createPngError) => ({
    type: ActionTypes.CREATE_PNG_FAIL as typeof ActionTypes.CREATE_PNG_FAIL,
    payload: { error },
    error: true
  })
};

export type SetsuAction =
  | ReturnType<typeof changeText>
  | ReturnType<typeof changeBgImage>
  | ReturnType<typeof createPng.start>
  | ReturnType<typeof createPng.succeed>
  | ReturnType<typeof createPng.fail>;
