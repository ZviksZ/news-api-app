import {applyMiddleware, combineReducers, createStore} from 'redux';
import {newsReducer}                                   from "./newsReducer.js";
import {reducer as formReducer}                        from 'redux-form'
import createSagaMiddleware                            from 'redux-saga';
import rootSaga                                        from '../sagas';

let reducers = combineReducers({
   news: newsReducer,
   form: formReducer,
})


const sagaMiddleware = createSagaMiddleware();

export const store = createStore(reducers, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootSaga)