/**
 * Created by sthavisomboon on 7/5/17.
 */

export default function users(state = [], action) {
  switch (action.type) {
    case 'TICKETS_FETCH_SUCCESS':
      return action.users;
    // initial state
    default:
      return state;
  }
}

export const getUserById = (state, id) => {
  return state ? state.find(user => (id === user.id)) : undefined;
}

export const getUserMap = (state) => {
  var result = state.reduce(function(map, obj) {
    map[obj.id] = obj;
    return map;
  }, {});
  return result;
}
