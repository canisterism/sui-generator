import { combineReducers } from 'redux';
import { connectRouter, RouterState } from 'connected-react-router';
import setsu, { SetsuState } from './setsu';
import { History } from 'history';

export interface RootState {
  setsu: SetsuState;
  router: RouterState;
}

const createRootReducer = (history: History) =>
  combineReducers({ router: connectRouter(history), setsu: setsu });

export default createRootReducer;
