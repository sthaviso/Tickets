/**
 * Created by sthavisomboon on 6/29/17.
 */
// tickets reducer
export default function tickets(state = [], action) {
  switch (action.type) {
    case 'TICKETS_FETCH_SUCCESS':
      return action.tickets.map((ticket, index) => {
          ticket.clicked = false;
          return ticket;
        });
    case 'CLICK_TICKET':
      return state.map(ticket => {
          if (ticket.id === action.id) {
            ticket.clicked = true;
            ticket.unreadMessagesCount = 0;
          } else {
            ticket.clicked = false;
          }
          return ticket;
        });
    // initial state
    default:
      return state;
  }
}

export const getSelectedTicket = (state) => {
  return state ? state.find(ticket => ticket.clicked) : undefined;
}

export const getMainTickets = (state = []) => {
  return state.filter(ticket => ticket.id === ticket.parentId);
}
