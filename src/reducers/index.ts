import { combineReducers } from 'redux';
import setsu, { SetsuState } from './setsu';

export interface RootState {
  setsu: SetsuState;
}

export default combineReducers({ setsu });
