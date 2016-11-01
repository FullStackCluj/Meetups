import store from 'redux/config/store'
import constants from './constants'
import * as api from 'api/todos'

export function getAll() {
  store.dispatch((dispatch, getState) => {
    return dispatch({
      types: [
        constants.GET_ALL_PENDING,
        constants.GET_ALL_SUCCESS,
        constants.GET_ALL_ERROR
      ],
      payload: {
        promise: api.getAll()
      }
    })
  })
}
