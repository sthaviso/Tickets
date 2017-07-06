/**
 * Created by sthavisomboon on 7/4/17.
 */
export default class ApiUsers {
  static getTickets(action) {
    const timeout = 1000;
    return new Promise(resolve => {
      setTimeout(() => {
        let tickets = { tickets: [
          {
            'id': 1,
            'userId': 1,
            'timestamp': '09:45AM',
            'text': 'What is my vacation policy?',
            'channel': 'email',
            'time': '30 mins ago',
            'parentId': 1
          },
          {
            'id': 2,
            'userId': 4,
            'timestamp': '09:45AM',
            'text': 'We have an unlimited vacation time off.',
            'channel': 'email',
            'time': '15 mins ago',
            'parentId': 1
          },
          {
            'id': 3,
            'userId': 2,
            'timestamp': '08:45AM',
            'text': 'I need help setting up a printer.',
            'channel': 'email',
            'time': '30 mins ago',
            'parentId': 3
          },
          {
            'id': 4,
            'userId': 4,
            'timestamp': '08:45AM',
            'text': 'Sure. Where are you located?',
            'channel': 'email',
            'time': '15 mins ago',
            'parentId': 3
          },
          {
            'id': 5,
            'userId': 3,
            'timestamp': '07:45AM',
            'text': 'How long is my maternity leave?',
            'channel': 'email',
            'time': '30 mins ago',
            'parentId': 5
          },
          {
            'id': 6,
            'userId': 4,
            'timestamp': '07:45AM',
            'text': '90 days',
            'channel': 'email',
            'time': '15 mins ago',
            'parentId': 5
          },
          {
            'id': 7,
            'userId': 3,
            'timestamp': '07:45AM',
            'text': 'Thank you!',
            'channel': 'email',
            'time': '10 mins ago',
            'parentId': 5
          },
        ],
        users: [
          {
            id : 1,
            img : 'https://randomuser.me/api/portraits/men/79.jpg',
            name : 'Jack Sparrow',
            isAdmin : false,
          },
          {
            id : 2,
            img : 'https://randomuser.me/api/portraits/men/26.jpg',
            name : 'John Doe',
            isAdmin : false,
          },
          {
            id : 3,
            img : 'https://randomuser.me/api/portraits/women/45.jpg',
            name : 'Jane Doe',
            isAdmin : false,
          },
          {
            id : 4,
            img : 'https://randomuser.me/api/portraits/men/38.jpg',
            name : 'Agent Haris',
            isAdmin : true,
          }
        ]};
        resolve(tickets);
      }, timeout);
    });
  }
}
