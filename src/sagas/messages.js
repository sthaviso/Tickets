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


let currentMessageId = 8;

export function* messageSubmit(action) {
  let message = {
          'createdBy': action.currentUser.id,
          'timestamp': Date.now(),
          'text': action.message,
          'channel': 'email',
          'ticketId': action.ticket.id,
          'readStatus': true
        };
  const messageId = yield call(ApiUsers.messageSubmit, message);
  yield put({
    type: 'MESSAGE_SUBMIT_SUCCESS',
    message: Object.assign({}, message, {id: messageId}),
  });
}
