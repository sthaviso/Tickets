/**
 * Created by sthavisomboon on 7/4/17.
 */
import { takeLatest } from 'redux-saga';
import { fork } from 'redux-saga/effects';
import { ticketsFetch, seedFirebase } from './tickets';
import { messagesFetch } from './messages';
export function* sagas() {
  yield [
    fork(takeLatest, 'FETCH_TICKETS', ticketsFetch),
    fork(takeLatest, 'FETCH_MESSAGES', messagesFetch),
    fork(takeLatest, 'SEED_FIREBASE', seedFirebase)
  ];
}
