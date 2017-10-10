/**
 * Created by sthavisomboon on 7/4/17.
 */
import {call, put} from 'redux-saga/effects';
import ApiUsers from '../api/index';

export function* ticketsFetch(action) {
  // call the api to get the users
  const {tickets, messages, users} = yield call(ApiUsers.getTickets);

  // dispatch the success action with the users attached
  yield put({
    type: 'TICKETS_FETCH_SUCCESS',
    tickets: tickets,
    messages: messages,
    users: users,
  });
}

export function* seedFirebase(action) {
  yield call(ApiUsers.seedFirebase);
}

export function* ticketClicked(action) {
  yield call(ApiUsers.clickTicket, action.id);
}
