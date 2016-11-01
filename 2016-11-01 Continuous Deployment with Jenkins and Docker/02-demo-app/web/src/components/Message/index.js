import React, { Component } from 'react'

import css from './style.scss'

class Message extends Component {
  render(){
    let { text, style } = this.props;
    return (
      <div className={`${css.base} ${style}`}>
        {text}
      </div>
    )
  }
}

export default Message