import React from 'react'
import { IndexRoute, Route } from 'react-router'

import TodoListContainer from "./containers/TodoListContainer"

export default (
  <Route>
    <Route path={"todos"} component={TodoListContainer}/>
  </Route>
);
