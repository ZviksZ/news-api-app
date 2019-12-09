import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import thunkMiddleware                                          from 'redux-thunk';
import {newsReducer}                                            from "./newsReducer.js";
import {reducer as formReducer}                                 from 'redux-form'

let reducers = combineReducers({
   news: newsReducer,
   form: formReducer,
})

export const store = createStore(reducers, applyMiddleware(thunkMiddleware))