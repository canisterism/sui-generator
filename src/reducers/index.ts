import { combineReducers } from 'redux';
import text from './setsuText';
import { SetsuTextState } from './setsuText';

export interface RootState {
  text: SetsuTextState;
}

export default combineReducers({ text });
