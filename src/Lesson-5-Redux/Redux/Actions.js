import Task from "../componnents/ShowTask";
import { ADDITION, REMOVAL, ADDTORECYCLEBYN, REMOVEEVER } from "./ActionTypes";


export const removal=(id,value)=>({
    type: REMOVAL,
    payload:{ id,value},
});

export const addition=(value)=>({
    type:ADDITION,
    payload: value,
});

export const addToRecycleByn=(value)=>({
    type: ADDTORECYCLEBYN,
    payload: value,
});
export const removeEver=(id)=>({
    type: REMOVEEVER,
    payload: id,
});