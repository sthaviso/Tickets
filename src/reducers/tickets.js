/**
 * Created by sthavisomboon on 6/29/17.
 */
// tickets reducer
export default function tickets(state = {}, action) {
  let new_state;
  new_state = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case 'TICKETS_FETCH_SUCCESS':
      let t = action.tickets.map((ticket, index) => ticket.clicked = (index === 0));
      new_state.list = action.tickets;
      return new_state;
    case 'TICKETS_CLICKED':
      new_state.list = state.list.map(ticket => {
        ticket.clicked = (ticket.key === action.key);
        return ticket;
      });
      return new_state;
    // initial state
    default:
      return state;
  }
}

export const getSelectedTicket = (state) => {
  return state.list ? state.list.find(ticket => ticket.clicked) : undefined;
}

