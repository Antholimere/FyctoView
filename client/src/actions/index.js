import axios from 'axios';
import { FETCH_USER, FETCH_INVESTMENTS, FETCH_CRYPTOS } from './types';

export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user')

  dispatch({ type: FETCH_USER, payload: res.data });
};

export const submitInvestment = (values) => async dispatch => {
  await axios.post('/api/investments', values);

  dispatch(fetchInvestments())
};

export const fetchInvestments = () => async dispatch => {
  const res = await axios.get('/api/investments')

  dispatch({ type: FETCH_INVESTMENTS, payload: res.data })
}

export const fetchCryptos = () => async dispatch => {
  const res = await axios.get('/api/cryptos/')

  dispatch({ type: FETCH_CRYPTOS, payload: res.data })
}
