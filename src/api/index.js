/**
 * Created by sthavisomboon on 7/4/17.
 */
import firebase from '../firebase';

import { tickets } from './seeddata';

export default class Api {
  static getTickets(action) {
    let result = {};
    return new Promise(resolve => {
      firebase.database().ref('tickets').on('value', resolve);
    }).then( snapshot => {
      let tickets = snapshot.val();
      for (let ticket in tickets) {
        tickets[ticket].id = ticket;
      }
      // return array of tickets
      result.tickets = Object.values(tickets);
      return new Promise(resolve => {
        firebase.database().ref('users').on('value', resolve);
      });
    }).then (snapshot => {
      // return map of users
      result.users = snapshot.val();
      return result;
    });
  }

  static getMessages(ticketId) {
    return new Promise(resolve => {
      firebase.database().ref('messages/'+ ticketId).on('value', resolve);
    }).then( snapshot => {
       // return array of messages
        return { messages: Object.values(snapshot.val())};
    });
  }

  static seedFirebase() {
    const ticketsRef = firebase.database().ref('tickets');
    const messagesRef = firebase.database().ref('messages');
    const usersRef = firebase.database().ref('users');
    ticketsRef.remove();
    messagesRef.remove();
    usersRef.remove();

    let userMap = {};
    tickets.users.forEach(
      user => {
        let userId = usersRef.push(user).key;
        userMap[user.id] = userId;
      }
    );

    tickets.tickets.forEach(
      ticket => {
        let newTicket = Object.assign({}, ticket, {userId: userMap[ticket.userId]});
        let ticketId = ticketsRef.push(newTicket).key;
        let ticketIdRef = firebase.database().ref('messages/' + ticketId);
        tickets.messages.map( message => {
          if (message.ticketId === ticket.id){
            let newMessage = Object.assign({}, message, {ticketId : ticketId, userId: userMap[message.userId]});
            ticketIdRef.push(newMessage);
          }
        })
      }
    );


  }
}
