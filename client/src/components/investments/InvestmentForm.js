import React, { Component } from 'react';
import { reduxForm, Field, formValueSelector } from 'redux-form';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios'
import TextField from 'material-ui/TextField';
import DatePicker from './DatePicker';
import UnitsField from './UnitsField';
import CurrencyField from './CurrencyField';
import Grid from 'material-ui/Grid';
import * as actions from '../../actions';

class InvestmentForm extends Component {

  render() {
    return(
      <div>
        <Grid container>
          <Grid item xs={4} />
          <Grid item xs={4}>
            <form onSubmit={this.props.handleSubmit((values) => { this.props.submitInvestment(values, this.props.history) })}>
              <div>
                <Field name="units" component={UnitsField} />
              </div>
              <div>
                <div>
                  <Field name="currency" component={CurrencyField} />
                </div>
              </div>
              <div>
                <label>Date</label>
                <div>
                  <Field name="date" component={DatePicker}/>
                </div>
              </div>
              <button type="submit">submit</button>
            </form>
          </Grid>
        </Grid>
      </div>
    )
  }
}

function validate(values) {
  const errors = {};

  if (!values['units']) {
    errors['units'] = 'You must provide a value';
  }
  if (!values['date']) {
    errors['date'] = 'You must provide a value';
  }
  if (!values['currency']) {
    errors['currency'] = 'You must provide a value';
  }

  return errors;
}

export default connect(null, actions)(withRouter(reduxForm({ validate, form: 'investmentForm' })(InvestmentForm)));
