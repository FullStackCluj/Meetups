import React, { Component } from 'react'
import { Router, Route, IndexRedirect } from 'react-router'

import TodoList from 'modules/TodoList/routes'
/**
 * Class Routes
 *
 * @package routes
 * @version 0.1.0
 */
class Routes extends Component {
  render() {
    return (
      <Router history={this.props.history}>
        <Route path="/">
          {TodoList}
        </Route>
      </Router>
    )
  }
}

export default Routes
