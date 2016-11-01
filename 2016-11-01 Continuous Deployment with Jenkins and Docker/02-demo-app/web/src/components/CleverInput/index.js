import React, { Component } from 'react'
import css from './style.scss'

class CleverInput extends Component{
  constructor(props){
    super(props);
    this.renderAddonContent = this.renderAddonContent.bind(this);
    this.renderAddon = this.renderAddon.bind(this);
    this.state = {
      valid: true
    }
  }

  renderAddonContent(minLength, maxLength, value){
    let valueLength = value ? value.length : 0;
    if (valueLength > 0 && (valueLength < minLength || !value.match(/\S/))){
      return 'minimum '+minLength+' caractere'
    }
    return ''
  }

  renderAddon(minLength, maxLength, value){
    if (minLength) {
      return (
        <div className={"input-group-addon "+css.inputAddon}>
          <div className={css.inputAddonContent}>{this.renderAddonContent(minLength, maxLength, value)}</div>
        </div>
      )
    }
    return (
      <div className={"input-group-addon "+css.inputAddon}>
      </div>
    )
  }

  render(){
    let { placeholder, value, minLength, maxLength, onChange } = this.props;
    let addon = this.renderAddon(minLength, maxLength, value);

    return(
      <div className={css.base}>
        <div className="form-group">
          <div className={"input-group "+css.focus}>
            <input type="text"
                   className={"form-control"}
                   placeholder={placeholder}
                   value={value}
                   onChange={onChange}/>
            {addon}
          </div>
        </div>
      </div>
    )
  }
}

CleverInput.propTypes = {
  placeholder: React.PropTypes.string,
  value: React.PropTypes.string,
  minLength: React.PropTypes.number,
  maxLength: React.PropTypes.number,
  onChange: React.PropTypes.func.isRequired
}

export default CleverInput