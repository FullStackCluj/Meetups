import React, { Component } from 'react'

import css from './style.scss'
import ListItem from './ListItem'
import Placeholder from 'components/Placeholder'

class List extends Component {

  constructor(props){
    super(props);
    this.renderList = this.renderList.bind(this);
  }

  componentDidMount(){
    this.props.getAllTodos();
  }

  render() {
    if (this.props.todos.pending) {
      return <Placeholder title="Se încarcă..."/>
    }

    if (this.props.todos.error) {
      return <Placeholder title="A apărut o eroare" text={this.props.todos.error.status+ ' '+this.props.todos.error.message}/>
    }

    let todos = this.props.todos.data.map(todo => {
      return <ListItem key={todo.id} todo={todo}/>
    });

    return(
      <div className={css.base}>
        <div className="container">
          <div className="row text-center">
            <div className={css.subtitle}>
            </div>
            <div className={css.list}>
              {todos}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default List
