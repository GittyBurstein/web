import{createStore} from 'redux';
import {todosReducer} from './Reducer'

export const store =createStore(todosReducer);


export default store;