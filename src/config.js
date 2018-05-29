const API = "/api";
const AUTH = API + "/auth";
const BLOG = API + "/blog";
const PROJECTS = API + "/projects";

export const POST_LOGIN = AUTH + "/login";
export const GET_LOGOUT = AUTH + "/logout";
export const GET_CHECK = AUTH + "/check";
export const POST_REGISTER = AUTH + "/register";

export const POST_PROJECT = PROJECTS + "/new";
export const GET_PROJECTS = PROJECTS + "/all";
export const GET_PROJECT = PROJECTS + "/:id";

export const POST_BLOGPOST = BLOG + "/new";
export const GET_BLOGPOSTS = BLOG + "/posts";
export const GET_BLOGPOST = BLOG + "/post/:id";
