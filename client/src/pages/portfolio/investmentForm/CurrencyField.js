import React from 'react'
import { MenuItem } from 'material-ui/Menu';
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

  render() {
    const {
      input,
      meta: {touched, error}
    } = this.props

    return(
      <div>
        <TextField
          id="select-currency"
          select
          label="Currency"
          style={{width: 200}}
          SelectProps={{
            MenuProps: {
              className: {width: 200},
            },
          }}
          {...input}
        >
          {currencies.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <div style={{color: 'red'}}>{touched && error && <span>{error}</span>}</div>
      </div>
    )
  }
}

export default renderCurrencyField
