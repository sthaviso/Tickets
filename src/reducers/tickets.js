/**
 * Created by sthavisomboon on 6/29/17.
 */
// tickets reducer
export default function tickets(state = {}, action) {
  let new_state;
  new_state = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case 'TICKETS_FETCH_SUCCESS':
      new_state.list = action.tickets;
      return new_state;
    // initial state
    default:
      return state;
  }
}
