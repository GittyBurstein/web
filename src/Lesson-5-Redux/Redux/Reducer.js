import { ADDITION, REMOVAL } from './ActionTypes';

const InitialTaskList = {
    todos: [],
    counter: 0,
};

export const todosReducer = (state = InitialTaskList, action) => {
    switch(action.type) {
        case ADDITION:
            const value = action.payload;
            return {
                ...state,
                todos: [...state.todos, value], // Store the task value directly
                counter: state.counter + 1, // Increment the counter
            };
        case REMOVAL:
            const newTodos = state.todos.filter((_, index) => index !== action.payload); // Remove the task at the given index
            return {
                ...state,
                todos: newTodos,
                counter: state.counter - 1, // Decrement the counter
            };
        default:
            return state;        
    }
};