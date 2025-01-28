import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addition } from '../Redux/Actions';

export default function ShowTask() {
    const [input, setInput] = useState('');
    const dispatch = useDispatch();

    return (
        <>
            <label>Insert your task</label>
            <input value={input} onChange={e => setInput(e.target.value)} />
            <button onClick={() => dispatch(addition(input))}>Add Task</button>
        </>
    );
}
