import React from 'react'
import TextField from 'material-ui/TextField';

class renderUnitsField extends React.Component {
  state = {
    units: ''
  }

  constructor (props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {
    const {
      input, placeholder,
      meta: {touched, error}
    } = this.props

    return(
      <div>
        <TextField
          {...input}
          id="number"
          label="Units"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          value={this.state.units}
          onChange={this.handleChange('units')}
          margin="normal"
        />
        <div>{touched && error && <span>{error}</span>}</div>
      </div>
    )
  }
}

export default renderUnitsField
