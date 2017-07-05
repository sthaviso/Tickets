/**
 * Created by sthavisomboon on 6/29/17.
 */

export default function selectedTicketKey(state = 1, action) {
  switch (action.type) {
    case 'TICKETS_CLICKED':
      return action.key;
    default:
      return state;
  }
}
