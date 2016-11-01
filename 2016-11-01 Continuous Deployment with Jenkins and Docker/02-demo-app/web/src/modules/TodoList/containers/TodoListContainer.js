import React from 'react'
import { connect } from 'react-redux'

import * as actions from 'redux/modules/TodoList/actions'
import * as selectors from 'redux/modules/TodoList/selectors'
import List from "../components/List"

const mapActionsToProps = (dispatch) => ({
  getAllTodos: actions.getAll
});

const mapStateToProps = (state) => ({
  todos: selectors.todos(state)
});

export default connect(mapStateToProps, mapActionsToProps)(List);
