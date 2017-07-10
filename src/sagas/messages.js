/**
 * Created by sthavisomboon on 7/6/17.
 */
import {call, put} from 'redux-saga/effects';
import ApiUsers from '../api/index';

export function* messagesFetch(action) {
  // call the api to get the users
  const {tickets, messages, users} = yield call(ApiUsers.getMessages, action.ticketId);

  // dispatch the success action with the users attached
  yield put({
    type: 'MESSAGES_FETCH_SUCCESS',
    messages: messages,
  });
}
