import { ADDITION, REMOVAL } from './ActionTypes';

const InitialTaskList = {
    todos: [],
};

export const todosReducer = (state = InitialTaskList, action) => {
    switch(action.type) {
        case ADDITION:
            const value = action.payload;
            return {
                ...state,
                todos: [...state.todos, value], // Store the task value directly
            };
        case REMOVAL:
            const newTodos = state.todos.filter((_, index) => index !== action.payload.id); // Remove the task at the given index
            return {
                ...state,
                todos: newTodos,
            };
        default:
            return state;        
    }
};