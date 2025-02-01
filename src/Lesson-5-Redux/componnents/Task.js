import React from 'react';
import { useDispatch } from 'react-redux';
import { removal } from '../Redux/Actions';
import { removeEver } from '../Redux/Actions';
export default function Task({ value, id ,placMent}) {
    const dispatch = useDispatch();
   function sending(placMent)
   {
    if(placMent==="task")
       dispatch(removal(id,value));
    else
       dispatch(removeEver(id,value));
   }
    return (
        <div className="task-item d-flex justify-content-between align-items-center p-2 border bg-light mb-2 rounded">
        <p className="mb-0">{value}</p>
        <button 
            className="btn btn-danger btn-sm" 
            onClick={() => sending(placMent)}
        >
            Remove Task
        </button>
    </div>
    );
}