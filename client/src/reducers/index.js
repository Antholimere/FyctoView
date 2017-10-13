import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import authReducer from './authReducer';
import investmentReducer from './investmentReducer';
import cryptoReducer from './cryptoReducer';

export default combineReducers({
  auth: authReducer,
  form: reduxForm,
  investments: investmentReducer,
  crypto: cryptoReducer
});
