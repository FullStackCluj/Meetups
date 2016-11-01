import constants from './constants'

const initialState = {
  todos: {
    pending: false,
    error: false,
    data: [],
    meta: {}
  }
}

const TodoListReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case constants.GET_ALL_PENDING:
      return {
        ...state,
        todos: Object.assign({}, state.todos, {pending: true})
      }

    case constants.GET_ALL_SUCCESS:
      return {
        ...state,
        todos: Object.assign({}, state.todos, {data: action.payload.data, meta: action.payload.meta, pending: false})
      }

    case constants.GET_ALL_ERROR:
      return {
        ...state,
        todos: Object.assign({}, state.todos, {error: action.payload, pending: false})
      }

    default:
      return state
  }
}

export default TodoListReducer
