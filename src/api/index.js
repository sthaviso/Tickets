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
      let users = snapshot.val();
      for(let user in users) {
        users[user].id = user;
      }
      result.users = users;
      return result;
    });
  }

  static getMessages(ticketId) {
    return new Promise(resolve => {
      firebase.database().ref('messages/'+ ticketId).on('value', resolve);
    }).then( snapshot => {
        let messages = snapshot.val();
        for(let message in messages) {
          messages[message].id = message;
        }
       // return array of messages
        return { messages: Object.values(messages)};
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
    let start = new Date();
    start.setDate(start.getDate() - 5);
    tickets.tickets.forEach(
      ticket => {
        let newTicket = Object.assign({}, ticket, {createdBy: userMap[ticket.createdBy], timestamp: start.getTime()});
        let ticketId = ticketsRef.push(newTicket).key;
        let ticketIdRef = firebase.database().ref('messages/' + ticketId);
        tickets.messages.map( message => {
          if (message.ticketId === ticket.id){
            let newMessage = Object.assign({}, message, {ticketId : ticketId, createdBy: userMap[message.createdBy], timestamp: start.getTime()});
            start.setHours(start.getHours() + 1);
            ticketIdRef.push(newMessage);
          }
        });
        start.setDate(start.getDate() + 1);
      }
    );
  }

  static messageSubmit(message) {
      let ticketIdRef = firebase.database().ref('messages/' + message.ticketId);
      return ticketIdRef.push(message).key;
  }

  static clickTicket(id) {
    let ticketIdRef = firebase.database().ref('tickets/' + id + '/unreadMessagesCount');
    return ticketIdRef.set(0);
  }
}
