import React, { Component } from 'react';
import { reduxForm, Field, formValueSelector } from 'redux-form';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios'
import AddIcon from 'material-ui-icons/Add';
import TextField from 'material-ui/TextField';
import DatePicker from './DatePicker';
import DatePicker_2 from './DatePicker_2';
import UnitsField from './UnitsField';
import CurrencyField from './CurrencyField';
import Grid from 'material-ui/Grid';
import * as actions from '../../actions';
import Button from 'material-ui/Button';
import '../App.css';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog';

class InvestmentForm extends Component {

  state = {
    open: false
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleRequestClose = () => {
    this.setState({ open: false });
    this.props.fetchInvestments();
  };

  render() {
    return(
      <div>
        <div className="addButton">
          <Button fab onClick={this.handleClickOpen} style={{ backgroundColor: '#FF5252', color: 'white' }}>
            <AddIcon />
          </Button>
        </div>
          <Dialog open={this.state.open} onRequestClose={this.handleRequestClose}>
            <DialogTitle>create investment</DialogTitle>
            <DialogContent>
              <form onSubmit={this.props.handleSubmit((values) => { this.props.submitInvestment(values) })}>
                <div>
                  <Field name="units" component={UnitsField} />
                </div>
                <div>
                  <div>
                    <Field name="currency" component={CurrencyField} />
                  </div>
                </div>
                <div>
                <div>
                  <Field name="date" component={DatePicker_2}/>
                </div>
                </div>
                <br/>
                <button onClick={this.handleRequestClose}>create</button>
              </form>
            </DialogContent>
          </Dialog>
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

function mapStateToProps({ investments }) {
  return { investments }
}

export default connect(mapStateToProps, actions)(withRouter(reduxForm({ validate, form: 'investmentForm' })(InvestmentForm)));
