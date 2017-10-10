export default function agent(state = {}, action) {
  switch (action.type) {
    case 'TICKETS_FETCH_SUCCESS':
      let users = action.users;
      let agent = users[Object.keys(users)[Object.keys(users).length - 1]];
      return agent;
    // initial state
    default:
      return state;
  }
}
