import React from 'react'
import { withStyles } from 'material-ui/styles';
import Input, { InputLabel } from 'material-ui/Input';
import { MenuItem } from 'material-ui/Menu';
import { FormControl, FormHelperText } from 'material-ui/Form';
import Select from 'material-ui/Select';
import TextField from 'material-ui/TextField';

const currencies = [
    {
      value: 'bitcoin',
      label: 'Bitcoin',
    },
    {
      value: 'litecoin',
      label: 'Litecoin',
    },
    {
      value: 'ethereum',
      label: 'Ethereum',
    }
  ]

class renderCurrencyField extends React.Component {
  state = {
    currency: ''
  }

  constructor (props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  render() {
    const {
      input, placeholder,
      meta: {touched, error}
    } = this.props

    return(
      <div>
        <TextField
          id="select-currency"
          select
          label="Currency"
          styles={{width: 200}}
          value={this.state.currency}
          onChange={this.handleChange('currency')}
          SelectProps={{
            MenuProps: {
              className: {width: 200},
            },
          }}
          helperText="Please select your currency"
          margin="normal"
          {...input}
        >
          {currencies.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </div>
    )
  }
}

export default renderCurrencyField
