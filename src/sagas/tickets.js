/**
 * Created by sthavisomboon on 7/4/17.
 */
import {call, put} from 'redux-saga/effects';
import ApiUsers from '../api/tickets';

export function* ticketsFetch(action) {
  // call the api to get the users
  const {tickets, users} = yield call(ApiUsers.getTickets);

  // dispatch the success action with the users attached
  yield put({
    type: 'TICKETS_FETCH_SUCCESS',
    tickets: tickets,
    users: users,
  });
}
