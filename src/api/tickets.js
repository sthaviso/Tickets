/**
 * Created by sthavisomboon on 7/4/17.
 */
import firebase from '../firebase';

export default class ApiUsers {
  static getTickets(action) {
    let result = {};
    return new Promise(resolve => {
      firebase.database().ref('tickets').on('value', resolve);
    }).then( snapshot => {
      result.tickets = Object.values(snapshot.val());
      return new Promise(resolve => {
        firebase.database().ref('users').on('value', resolve);
      });
    }).then (snapshot => {
      result.users = Object.values(snapshot.val());
      return result;
    });
  }

  static getMessages(ticketId) {
    return new Promise(resolve => {
      firebase.database().ref('messages').on('value', resolve);
    }).then( snapshot => {
        return { messages: Object.values(snapshot.val())};
    });
  }
}
