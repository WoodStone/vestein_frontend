import { createStore, combineReducers, applyMiddleware } from 'redux';

const reducers = {

};

const store = createStore(
    combineReducers(reducers), {}, applyMiddleware()
);

export default store;
