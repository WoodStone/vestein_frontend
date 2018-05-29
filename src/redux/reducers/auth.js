import {GET_AUTH_CHECK, GET_AUTH_LOGOUT, POST_AUTH_LOGIN, POST_AUTH_REGISTER} from "../types";

const update = (state, prop, child) => {
  return {
      ...state,
    [prop]: {
        ...init,
        [child]: true
    }
  }
};

const init = {
  sent: false,
  received: false,
  error: false
};

const auth = (state = {
  user: null,
  auth: {...init},
  register: {...init},
  login: {...init},
  logout: {...init}
}, action) => {
  switch (action.type) {
    case GET_AUTH_CHECK.SENT:
      return update(state, 'auth', 'sent');
    case GET_AUTH_CHECK.RECEIVED:
      return {
          ...update(state, 'auth', 'received'),
          user: action.response.data
      };
    case GET_AUTH_CHECK.ERROR:
      return update(state, 'auth', 'error');
    case GET_AUTH_LOGOUT.SENT:
      return update(state, 'logout', 'sent');
    case GET_AUTH_LOGOUT.RECEIVED:
      return {
          ...update(state, 'logout', 'received'),
          user: null
      };
    case GET_AUTH_LOGOUT.ERROR:
      return update(state, 'logout', 'error');
    case POST_AUTH_LOGIN.SENT:
      return update(state, 'login', 'sent');
    case POST_AUTH_LOGIN.RECEIVED:
      return {
          ...update(state, 'login', 'received'),
          user: action.response.data
      };
    case POST_AUTH_LOGIN.ERROR:
      return update(state, 'login', 'error');
    case POST_AUTH_REGISTER.SENT:
      return update(state, 'register', 'sent');
    case POST_AUTH_REGISTER.RECEIVED:
      return update(state, 'register', 'received');
    case POST_AUTH_REGISTER.ERROR:
      return update(state, 'register', 'error');
    default:
      return state;
  }
};

export default auth;
