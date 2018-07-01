const API = "/api";
const AUTH = API + "/auth";

export const BLOG = API + "/blog";


export const POST_LOGIN = AUTH + "/login";
export const GET_LOGOUT = AUTH + "/logout";
export const GET_CHECK = AUTH + "/check";
export const POST_REGISTER = AUTH + "/register";

export const BLOGPOST = BLOG + "/:id";

export const PROJECTS = API + "/projects";
export const PROJECT = PROJECTS + "/:id";
