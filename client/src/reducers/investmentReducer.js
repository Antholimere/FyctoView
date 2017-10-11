import { FETCH_INVESTMENTS } from '../actions/types';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_INVESTMENTS:
      return action.payload;
    default:
      return state;
  }
}
