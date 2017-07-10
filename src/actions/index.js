/**
 * Created by sthavisomboon on 7/9/17.
 */
export const fetchMessages = (ticketId) => (
  {
    type: 'FETCH_MESSAGES',
    ticketId: ticketId,
  }
);

export const fetchTickets = () => (
  {
    type: 'FETCH_TICKETS',
  }
);

export const clickTicket = (id) => (
  {
    type: 'CLICK_TICKET',
    id: id,
  }
);
