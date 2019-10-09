import { Reducer } from 'redux';
import { SetsuTextActionTypes, SetsuTextAction } from '../actions/setsuText';

export interface SetsuTextState {
  textValue: string;
}

export const initialTextState: SetsuTextState = {
  textValue: 'Webエンジニアの８割\n幼少期に\n迷路書いてた'
};

const setsuReducer: Reducer<SetsuTextState, SetsuTextAction> = (
  state: SetsuTextState = initialTextState,
  action: SetsuTextAction
): SetsuTextState => {
  switch (action.type) {
    case SetsuTextActionTypes.TEXTCHANGE:
      return {
        ...state,
        textValue: action.text || ''
      };
    default: {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const _: never = action.type;
      return state;
    }
  }
};

export default setsuReducer;
