import React from 'react';
import { useDispatch } from 'react-redux';
import { removal } from '../Redux/Actions';

export default function Task({ value, id }) {
    const dispatch = useDispatch();

    return (
        <>
            <p>{value}</p>
            <button onClick={() => dispatch(removal(id))}>Remove the task</button>
        </>
    );
}