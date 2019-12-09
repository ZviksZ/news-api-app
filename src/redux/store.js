import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import thunkMiddleware                                          from 'redux-thunk';

let reducers = combineReducers({
   news: newsReducer
})

export const store = createStore(reducers)

