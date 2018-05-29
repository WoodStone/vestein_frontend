import axios from 'axios';
import {GET_CHECK, GET_LOGOUT, POST_LOGIN, POST_REGISTER} from "../../config";
import {GET_AUTH_CHECK, GET_AUTH_LOGOUT, POST_AUTH_LOGIN, POST_AUTH_REGISTER} from "../types";
import {ERROR, RECEIVED, SENT} from "../utility";

export function register(user) {
  return dispatch => {
    axios.post(POST_REGISTER, user)
        .then(response => {
          dispatch(RECEIVED(POST_AUTH_REGISTER, response));
        })
        .catch(error => {
          dispatch(ERROR(POST_AUTH_REGISTER, error));
        });
    dispatch(SENT(POST_AUTH_REGISTER))
  }
}

export function login(user) {
  return dispatch => {
    axios.post(POST_LOGIN, user)
        .then(response => {
          dispatch(RECEIVED(POST_AUTH_LOGIN, response));
        })
        .catch(error => {
          dispatch(ERROR(POST_AUTH_LOGIN, error));
        });
    dispatch(SENT(POST_AUTH_LOGIN))
  }
}

export function logout() {
  return dispatch => {
    axios.get(GET_LOGOUT)
        .then(response => {
          dispatch(RECEIVED(GET_AUTH_LOGOUT, response));
        })
        .catch(error => {
          dispatch(ERROR(GET_AUTH_LOGOUT, error));
        });
    dispatch(SENT(GET_AUTH_LOGOUT))
  }
}

export function check() {
  return dispatch => {
    axios.get(GET_CHECK)
        .then(response => {
          dispatch(RECEIVED(GET_AUTH_CHECK, response));
        })
        .catch(error => {
          dispatch(ERROR(GET_AUTH_CHECK, error));
        });
    dispatch(SENT(GET_AUTH_CHECK))
  }
}
