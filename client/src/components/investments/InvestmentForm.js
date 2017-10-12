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
                <option value="bitcoin">Bitcoin</option>
                <option value="ethereum">Ethereum</option>
                <option value="litecoin">Litecoin</option>
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
