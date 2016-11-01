import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import TodoList from '../modules/TodoList/reducer'

export default combineReducers({
  TodoList,
  routing: routerReducer
})
