import axios from 'axios';
import { FETCH_USER } from './types';

export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user')

  dispatch({ type: FETCH_USER, payload: res.data });
};

export const submitInvestment = (values) => async dispatch => {
  const res = await axios.post('/api/investments', values);

  dispatch({ type: FETCH_USER, payload: res.data });
};
