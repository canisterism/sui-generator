import { Reducer } from 'redux';
import {
  CHANGE_TEXT,
  CHANGE_BG_IMAGE_URL,
  SetsuAction
} from '../actions/setsu';

export interface SetsuState {
  textValue: string;
  fontSize: number;
  width: number;
  height: number;
  bgImageUrl: string;
  xCenter: number;
  yCenter: number;
}

export const initialTextState: SetsuState = {
  textValue: 'Webエンジニアの８割\n幼少期に\n迷路書いてた',
  fontSize: 116,
  width: 1500, // px
  height: 800, // px
  bgImageUrl: '',
  xCenter: 50, // %
  yCenter: 48 // %
};

const setsuReducer: Reducer<SetsuState, SetsuAction> = (
  state: SetsuState = initialTextState,
  action: SetsuAction
): SetsuState => {
  switch (action.type) {
    case CHANGE_TEXT:
      return {
        ...state,
        textValue: action.payload.text || ''
      };
    case CHANGE_BG_IMAGE_URL:
      return {
        ...state,
        bgImageUrl: action.payload.url || ''
      };
    default: {
      return state;
    }
  }
};

export default setsuReducer;
