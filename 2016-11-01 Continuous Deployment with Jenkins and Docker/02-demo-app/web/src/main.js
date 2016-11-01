import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'
import store from 'redux/config/store'
import history from 'redux/config/history'
import Routes from './routes'
import 'styles/_base.scss';

ReactDOM.render(
  <Provider store={store}>
    <Routes history={history}/>
  </Provider>,
  document.getElementById('root')
);
