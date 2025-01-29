import ValidateTaskMiddleWare from '../MiddleWares/ValidateTask';
import{createStore} from 'redux';
import {todosReducer} from './Reducer'
import { recycleReducer } from './RecycleReducer';
import {applyMiddleware} from 'redux';
import { combineReducers } from 'redux';
 
const rootReducer=combineReducers({
  todos:todosReducer,
  recycleByn:recycleReducer,
});
 
export const store =createStore(rootReducer,applyMiddleware(ValidateTaskMiddleWare));
export default store;