/**
 * Created by sthavisomboon on 6/29/17.
 */
// tickets reducer
export default function tickets(state = [], action) {
  switch (action.type) {
    case 'TICKETS_FETCH_SUCCESS':
      return action.tickets.map((ticket, index) => {
          ticket.clicked = (index === 0);
          return ticket;
        });
    case 'TICKETS_CLICKED':
      return state.map(ticket => {
          ticket.clicked = (ticket.id === action.id);
          return ticket;
        });
    // initial state
    default:
      return state;
  }
}

const getSelectedTicket = (state) => {
  return state ? state.find(ticket => ticket.clicked) : undefined;
}

export const getMainTickets = (state = []) => {
  return state.filter(ticket => ticket.id === ticket.parentId);
}

const getTicketThreadByParentId = (state, id) => {
  return state.filter(ticket => ticket.parentId === id);
}

export const getSelectedTicketThread = (state) => {
  let mainTicket = getSelectedTicket(state);
  if(mainTicket) {
    return {
      title: mainTicket.text,
      messages: getTicketThreadByParentId(state, mainTicket.id),
    };
  } else {
    return {
      title: '',
      messages: undefined,
    };
  }
}

