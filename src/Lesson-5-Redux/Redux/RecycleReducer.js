import {REMOVAL ,REMOVEEVER,ADDTORECYCLEBYN} from "./ActionTypes";
const InitialTaskList = {
    resycleByn: [],
};

export const recycleReducer = (state = InitialTaskList, action) => {
    switch(action.type) {
        case REMOVAL:
            const value = action.payload.value;
            return {
                ...state,
                resycleByn: [...state.resycleByn, value], // Store the task value directly
            };
        case REMOVEEVER:
            const newARR= state.resycleByn.filter((_, index) => index !== action.payload); // Remove the task at the given index
            return {
                ...state,
                resycleByn: newARR,
            };
        default:
            return state;        
    }
};