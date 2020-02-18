import {applyMiddleware, createStore} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import {rootReducer} from './store/reducer/combineReducer';

const middlewares = [thunk];
export default () => {
   return createStore(rootReducer, applyMiddleware(logger, ...middlewares));
}