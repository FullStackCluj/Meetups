import React, { Component } from 'react'
import css from './style.scss'

class Placeholder extends Component {
  render() {
    let { img, title, text, titleStyle, textStyle } = this.props;
    let image = img ? <img className={css.img} src={img} alt="img"/> : '';
    let titleCls = titleStyle ? titleStyle : '';
    let textCls = textStyle ? textStyle : '';

    return(
      <div className={css.base}>
        {image}
        <div className={css.title+' '+titleCls}>{title}</div>
        <div className={css.text+' '+textStyle}>{text}</div>
      </div>
    )
  }
}

Placeholder.propTypes = {
  img: React.PropTypes.string,
  title: React.PropTypes.string.isRequired
};

export default Placeholder