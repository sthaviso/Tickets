/**
 * Created by sthavisomboon on 6/29/17.
 */
// tickets reducer
export default function tickets(state = {list:[]}, action) {
  switch (action.type) {
    case 'TICKETS_FETCH_SUCCESS':
      return Object.assign({}, state, {
        list: action.tickets.map((ticket, index) => {
          ticket.clicked = (index === 0);
          return ticket;
        })
      });

    case 'TICKETS_CLICKED':
      return Object.assign({}, state, {
        list: state.list.map(ticket => {
          ticket.clicked = (ticket.key === action.key);
          return ticket;
        })
      });
    // initial state
    default:
      return state;
  }
}

export const getSelectedTicket = (state) => {
  return state.list ? state.list.find(ticket => ticket.clicked) : undefined;
}

