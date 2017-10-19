import React from 'react'
import TextField from 'material-ui/TextField';

class renderUnitsField extends React.Component {

  render() {
    const {
      input,
      meta: {touched, error}
    } = this.props

    return(
      <div>
        <TextField
          {...input}
          id="number"
          label="Units"
          type="number"
          style={{ width: 200 }}
        />
        <div style={{color: 'red'}}>{touched && error && <span>{error}</span>}</div>
      </div>
    )
  }
}

export default renderUnitsField
