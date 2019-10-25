import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas/setsu';
import { createBrowserHistory } from 'history';
import createRootReducer from './reducers/index';
import { routerMiddleware, ConnectedRouter } from 'connected-react-router';

import './index.css';
import 'semantic-ui-css/semantic.min.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const sagaMiddleware = createSagaMiddleware();
export const history = createBrowserHistory();

export const store = createStore(
  createRootReducer(history),
  composeWithDevTools(
    compose(applyMiddleware(routerMiddleware(history), sagaMiddleware))
  )
);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
sagaMiddleware.run(rootSaga);
