export const CHANGE_TEXT = 'CHANGE_TEXT';
export const CHANGE_BG_IMAGE_URL = 'CHANGE_BG_IMAGE_URL';

export const changeText = (text: string) => ({
  type: CHANGE_TEXT as typeof CHANGE_TEXT,
  payload: { text }
});

export const changeBgImage = (src: string) => ({
  type: CHANGE_BG_IMAGE_URL as typeof CHANGE_BG_IMAGE_URL,
  payload: { src }
});

export type SetsuAction =
  | ReturnType<typeof changeText>
  | ReturnType<typeof changeBgImage>;
