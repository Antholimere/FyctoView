import React, { Component } from 'react';
import { reduxForm, Field, formValueSelector } from 'redux-form';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios'
import TextField from 'material-ui/TextField';
import DatePicker from './DatePicker';
import * as actions from '../../actions';

class InvestmentForm extends Component {

  render() {
    return(
      <div>
        <form onSubmit={this.props.handleSubmit((values) => { this.props.submitInvestment(values, this.props.history) })}>
          <div>
            <label>Units</label>
            <div>
              <Field name="units" component="input" />
            </div>
          </div>
          <div>
            <label>Currency</label>
            <div>
              <Field name="currency" component="select">
                <option />
                <option value="ff0000">Red</option>
                <option value="00ff00">Green</option>
                <option value="0000ff">Blue</option>
              </Field>
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
      </div>
    )
  }
}

export default connect(null, actions)(withRouter(reduxForm({ form: 'investmentForm' })(InvestmentForm)));
