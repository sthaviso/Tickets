/**
 * Created by sthavisomboon on 7/4/17.
 */
export default class ApiUsers {
  static getTickets(action) {
    const timeout = 1000;
    return new Promise(resolve => {
      setTimeout(() => {
        let tickets = [
          {
            'key' : 1,
            'img' : 'https://randomuser.me/api/portraits/men/79.jpg',
            'name' : 'Jack Sparrow',
            'timestamp' : '09:45AM',
            'title' : 'What is my vacation policy?',
            'messages' : [{
              'key' : '1',
              'img': 'https://randomuser.me/api/portraits/men/79.jpg',
              'question': 'What is my vacation policy?',
              'channel' : 'e-mail',
              'time' : '30 mins ago',
              'isAdmin': false
            },{
              'key' : '2',
              'img': 'https://randomuser.me/api/portraits/men/38.jpg',
              'question': 'We have an unlimited vacation time off.',
              'channel' : 'e-mail',
              'time' : '15 mins ago',
              'isAdmin': true
            }]
          },
          {
            'key' : 2,
            'img' : 'https://randomuser.me/api/portraits/men/26.jpg',
            'name' : 'John Doe',
            'timestamp' : '08:45AM',
            'title' : 'I need help setting up a printer.',
            'messages' : [{
              'key' : '1',
              'img': 'https://randomuser.me/api/portraits/men/26.jpg',
              'question': 'I need help setting up a printer',
              'channel' : 'e-mail',
              'time' : '30 mins ago',
              'isAdmin': false
            },{
              'key' : '2',
              'img': 'https://randomuser.me/api/portraits/men/38.jpg',
              'question': 'Sure. Where are you located?',
              'channel' : 'e-mail',
              'time' : '15 mins ago',
              'isAdmin': true
            }]

          },
          {
            'key' : 3,
            'img' : 'https://randomuser.me/api/portraits/women/45.jpg',
            'name' : 'Jane Doe',
            'timestamp' : '07:45AM',
            'title' : 'How long is my maternity leave?',
            'messages' : [{
              'key' : '1',
              'img': 'https://randomuser.me/api/portraits/women/45.jpg',
              'question': 'How long is my maternity leave?',
              'channel' : 'e-mail',
              'time' : '30 mins ago',
              'isAdmin': false
            },{
              'key' : '2',
              'img': 'https://randomuser.me/api/portraits/men/38.jpg',
              'question': '90 days',
              'channel' : 'e-mail',
              'time' : '15 mins ago',
              'isAdmin': true
            }]
          }
        ];
        resolve(tickets);
      }, timeout);
    });
  }
}
