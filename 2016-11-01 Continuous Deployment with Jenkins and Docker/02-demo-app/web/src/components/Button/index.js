import React, { Component } from 'react'

import css from './style.scss'

class Button extends Component {
  render(){
    let { text, style, disabled, hidden, onClick } = this.props;
    return(
      <button className={css.button + ' ' + style + ' ' + (disabled ? css.disabled : '') + ' '+ (hidden ? css.hidden : '')}
              disabled={disabled}
              onClick={onClick} >
        {text}
      </button>
    )
  }
}

Button.propTypes = {
  text: React.PropTypes.string.isRequired,
  style: React.PropTypes.string,
  disabled: React.PropTypes.bool,
  onClick: React.PropTypes.func,
  hidden: React.PropTypes.bool
};

Button.defaultProps = {
  disabled: false,
  hidden: false,
  style: ''
};

export default Button