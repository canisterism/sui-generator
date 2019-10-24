import { Reducer } from 'redux';
import { SetsuAction } from '../actions/setsu';
import * as ActionTypes from '../actions/setsuConstants';

export interface SetsuState {
  textValue: string;
  fontSize: number;
  width: number;
  height: number;
  xCenter: number;
  yCenter: number;
  lineSpace: number;
  isProcessing: boolean;
  previewBase64: string;
  error: boolean;
  docId: string; // firebaseにアップロードされたファイル名
  src: string; //firebaseの画像URL
}

export const initialTextState: SetsuState = {
  textValue: 'Webエンジニアの８割\n幼少期に\n迷路書いてた',
  fontSize: 116,
  width: 1500, // px
  height: 850, // px
  xCenter: 50, // %
  yCenter: 50, // %
  lineSpace: 8,
  isProcessing: false,
  previewBase64: '',
  error: false,
  docId: '',
  src: ''
};

const setsuReducer: Reducer<SetsuState, SetsuAction> = (
  state: SetsuState = initialTextState,
  action: SetsuAction
): SetsuState => {
  switch (action.type) {
    case ActionTypes.CHANGE_TEXT:
      return {
        ...state,
        textValue: action.payload.text || ''
      };
    case ActionTypes.COMPLETE_START:
      return {
        ...state,
        isProcessing: true
      };
    case ActionTypes.COMPLETE_SUCCEED:
      return {
        ...state,
        isProcessing: false,
        docId: action.payload.docId
      };
    case ActionTypes.COMPLETE_FAIL:
      return {
        ...state,
        isProcessing: false,
        error: action.error || true
      };
    case ActionTypes.GET_SETSU_URL_START:
      return {
        ...state,
        isProcessing: true
      };
    case ActionTypes.GET_SETSU_URL_SUCCEED:
      return {
        ...state,
        isProcessing: false,
        src: action.payload.result.url
      };
    case ActionTypes.GET_SETSU_URL_FAIL:
      return {
        ...state,
        isProcessing: false,
        error: action.error || true
      };
    default: {
      return state;
    }
  }
};

export default setsuReducer;
