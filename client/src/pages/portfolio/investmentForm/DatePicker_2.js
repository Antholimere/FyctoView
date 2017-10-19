import React from 'react';
import TextField from 'material-ui/TextField';

function DatePickers(props) {
  const {
      input,
      meta: {touched, error}
    } = props

  return (
    <div>
      <TextField
        id="date"
        label="Date"
        type="date"
        style={{ width: 200, marginTop: 16 }}
        InputLabelProps={{
          shrink: true,
        }}
        {...input}
      />
      <div style={{color: 'red'}}>{touched && error && <span>{error}</span>}</div>
    </div>
  );
}

export default DatePickers;
