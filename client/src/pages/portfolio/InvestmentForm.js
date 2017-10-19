import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import AddIcon from 'material-ui-icons/Add';
import DatePicker_2 from './investmentForm/DatePicker_2';
import UnitsField from './investmentForm/UnitsField';
import CurrencyField from './investmentForm/CurrencyField';
import * as actions from '../../actions';
import Button from 'material-ui/Button';
import { CircularProgress } from 'material-ui/Progress';
import Dialog, {
  DialogContent,
  DialogTitle,
} from 'material-ui/Dialog';

class InvestmentForm extends Component {

  state = {
    open: false,
    loading: false,
    success: false,
    values: null
  }

  componentWillUnmount() {
    clearTimeout(this.timer)
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleRequestClose = () => {
    this.setState({ open: false });
  };

  handleButtonClick = (values) => {
    this.props.submitInvestment(values)
    if (!this.state.loading) {
      this.setState(
        {
          success: false,
          loading: true,
        },
        () => {
          this.timer = setTimeout(() => {
            this.handleRequestClose();
            this.setState({
              loading: false,
              success: true,
            });
          }, 1500);
        },
      );
    }
  };

  timer = undefined;

  render() {
    const { loading, success } = this.state;

    return(
      <div>
        <div className="addButton">
          <Button fab onClick={this.handleClickOpen} style={{ backgroundColor: '#FF5252', color: 'white' }}>
            <AddIcon />
          </Button>
        </div>
          <Dialog open={this.state.open} onRequestClose={this.handleRequestClose}>
            <DialogTitle align="center">new investment</DialogTitle>
            <DialogContent>
              <form onSubmit={this.props.handleSubmit((values) => { this.handleButtonClick(values) })}>
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
                <Button
                  type="submit"
                  raised
                  className="success"
                  color="primary"
                  disabled={loading}
                  style={{ backgroundColor: '#1980ef', width: 200 }}
                >
                create
                {loading && <CircularProgress size={24} className="buttonProgress" />}
                </Button>
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
