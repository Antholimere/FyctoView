import { FETCH_CRYPTOS } from '../actions/types';

export default function(state = null, action) {
  switch (action.type) {
    case FETCH_CRYPTOS:
      return action.payload;
    default:
      return state;
  }
}
