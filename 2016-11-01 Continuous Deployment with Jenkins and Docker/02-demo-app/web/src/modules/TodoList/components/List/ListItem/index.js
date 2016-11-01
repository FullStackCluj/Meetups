import React, { Component } from 'react'
import { Link } from 'react-router'
import { browserHistory } from 'react-router'

import css from './style.scss'

class ListItem extends Component {
  constructor(props){
    super(props);
  }

  render(){
    let { todo } = this.props;

    return(
      <div className={css.base}>
        <div className="row">
          <div className="col-xs-12">
            <div className={css.name}>{todo.name}</div>
            <div className={css.address}>{todo.description}</div>
          </div>
        </div>
      </div>
    )
  }
}

export default ListItem
