import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import { reducer as formReducer } from "redux-form";
import tickets , * as fromTickets from './tickets';
import users , * as fromUsers from './users';
import messages, * as fromMessages from './messages';

// main reducers
export const reducers = combineReducers({
  routing: routerReducer,
  form: formReducer.plugin({
    "user_edit": (state, action) => {
      // reset form (wipe state) when navigating away from the User edit page
      switch(action.type) {
        case "@@router/LOCATION_CHANGE":
          return undefined;
        default:
          return state;
      }
    }
  }),
  tickets: tickets,
  users: users,
  messages: messages,
});

export const getSelectedTicket = (state) => fromTickets.getSelectedTicket(state.tickets);

export const getUserById = (state, id) => fromUsers.getUserById(state.users, id);

export const getTicketMessages = (state, ticket) => fromMessages.getTicketMessages(state.messages, ticket);
