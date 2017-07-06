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
            'key' : 1,
            'userId' : 1,
            'timestamp' : '09:45AM',
            'title' : 'What is my vacation policy?',
            'messages' : [{
              'key' : '1',
              'question': 'What is my vacation policy?',
              'channel' : 'e-mail',
              'time' : '30 mins ago',
              'userId' : 1
            },{
              'key' : '2',
              'question': 'We have an unlimited vacation time off.',
              'channel' : 'e-mail',
              'time' : '15 mins ago',
              'userId' : 4,
            }]
          },
          {
            'key' : 2,
            'timestamp' : '08:45AM',
            'title' : 'I need help setting up a printer.',
            'userId' : 2,
            'messages' : [{
              'key' : '1',
              'question': 'I need help setting up a printer',
              'channel' : 'e-mail',
              'time' : '30 mins ago',
              'userId' : 2
            },{
              'key' : '2',
              'question': 'Sure. Where are you located?',
              'channel' : 'e-mail',
              'time' : '15 mins ago',
              'userId' : 4,
            }]

          },
          {
            'key' : 3,
            'timestamp' : '07:45AM',
            'title' : 'How long is my maternity leave?',
            'userId' : 3,
            'messages' : [{
              'key' : '1',
              'question': 'How long is my maternity leave?',
              'channel' : 'e-mail',
              'time' : '30 mins ago',
              'userId' : 3,
            },{
              'key' : '2',
              'question': '90 days',
              'channel' : 'e-mail',
              'time' : '15 mins ago',
              'userId' : 4,
            }]
          }
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
