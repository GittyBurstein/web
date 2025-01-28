import Task from "../componnents/ShowTask";
import { ADDITION, REMOVAL } from "./ActionTypes";


export const removal=(id)=>({
    type: REMOVAL,
    payload: id,
});

export const addition=(value)=>({
    type:ADDITION,
    payload: value,
});