import { createStore, applyMiddleware } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import { browserHistory } from 'react-router'
import thunk from 'redux-thunk'

import rootReducer from 'redux/config/rootReducer'
import promiseMiddleware from 'redux/config/promiseMiddleware'
import logger from 'redux/config/logger'

const historyMiddleware = routerMiddleware(browserHistory);
const store = createStore(
  rootReducer,
  __DEV__
    ? applyMiddleware(historyMiddleware, promiseMiddleware, thunk, logger)
    : applyMiddleware(historyMiddleware, promiseMiddleware, thunk)
);

export default store
