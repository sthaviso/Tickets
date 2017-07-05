/**
 * Created by sthavisomboon on 7/4/17.
 */
import { takeLatest } from 'redux-saga';
import { fork } from 'redux-saga/effects';
import { ticketsFetch} from './tickets';
export function* sagas() {
  yield [
    fork(takeLatest, 'ticketsFetch', ticketsFetch),
  ];
}
