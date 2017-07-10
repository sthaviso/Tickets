/**
 * Created by sthavisomboon on 7/5/17.
 */

export default function users(state = {}, action) {
  switch (action.type) {
    case 'TICKETS_FETCH_SUCCESS':
      return action.users;
    // initial state
    default:
      return state;
  }
}

