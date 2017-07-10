/**
 * Created by sthavisomboon on 7/6/17.
 */
export default function messages(state = [], action) {
  switch (action.type) {
    case 'MESSAGES_FETCH_SUCCESS':
      return action.messages;
    // initial state
    default:
      return state;
  }
}


const getMessagesByTicketId = (state, id) => {
  return state.filter(message => message.ticketId === id);
}

export const getTicketMessages = (state, mainTicket, users) => {
  if(mainTicket) {
    return {
      title: mainTicket.text,
      messages: getMessagesByTicketId(state, mainTicket.id),
      ticketId: mainTicket.id,
      users: users,
    };
  } else {
    return {
      title: '',
      messages: undefined,
      ticketId: undefined,
      users: users,
    };
  }
}
