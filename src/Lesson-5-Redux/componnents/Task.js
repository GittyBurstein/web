import React from 'react';
import { useDispatch } from 'react-redux';
import { removal } from '../Redux/Actions';

export default function Task({ value, id }) {
    const dispatch = useDispatch();

    return (
        <div className="task-item d-flex justify-content-between align-items-center p-2 border bg-light mb-2 rounded">
        <p className="mb-0">{value}</p>
        <button 
            className="btn btn-danger btn-sm" 
            onClick={() => dispatch(removal(id))}
        >
            Remove Task
        </button>
    </div>
    );
}