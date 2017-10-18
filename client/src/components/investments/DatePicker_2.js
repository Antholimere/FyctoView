import React from 'react';
import TextField from 'material-ui/TextField';

function DatePickers(props) {
  const { input } = props;

  return (
    <TextField
      id="date"
      label="Birthday"
      type="date"
      style={{ width: 200 }}
      InputLabelProps={{
        shrink: true,
      }}
      {...input}
    />
  );
}

export default DatePickers;
