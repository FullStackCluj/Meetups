import React from 'react'
import css from './style.scss'

class ErrorAlert extends React.Component {
  render() {
    let fadeIn = this.props.error ? css.fadeIn : '';
    return(
      <div className={"alert alert-danger "+css.error + " " +fadeIn} role="alert">
        <div className={css.text}>{this.props.error}</div>
        {/*<span onClick={this.props.onRemove} className="glyphicon glyphicon-remove"></span>*/}
      </div>
    )
  }
}

export default ErrorAlert