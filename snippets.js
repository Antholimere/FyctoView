const mongoose = require('mongoose');
const Bitcoin = mongoose.model('cryptos');
const request = require('request')
const csv = require('csvtojson')

const currencies = ['btc', 'ltc', 'eth']

const getCurrencies = () => {
  currencies.map((c) => {

    const bitcoin = new Bitcoin({
      name: c,
      priceHistory: []
    }).save().then((x) => {
      let counter = 0;
      csv()
        .fromStream(request.get(`https://coinmetrics.io/data/${c}.csv`))
        .on('csv', (csvRow)=>{
          counter += 1;
          x.priceHistory.push({ day: csvRow[0], priceUSD: csvRow[4] });
          const subdoc = x.priceHistory[0]
          subdoc.isNew
          x.save().then((parent) => { console.log(parent) })
        })
        .on('done',(error)=>{})
    })
  })
}

getCurrencies();


import React, { Component } from 'react';
import { reduxForm, Field, formValueSelector } from 'redux-form';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios'
import TextField from 'material-ui/TextField';
import DatePicker from './DatePicker';
import UnitsField from './UnitsField';
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
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default connect(null, actions)(withRouter(reduxForm({ form: 'investmentForm' })(InvestmentForm)));
