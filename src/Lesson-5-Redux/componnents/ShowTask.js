import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addition } from '../Redux/Actions';

export default function ShowTask() {
    const [input, setInput] = useState('');
    const dispatch = useDispatch();

    const handleAddTask = () => {
       
            dispatch(addition(input)); // Dispatch the action to add the task
            setInput(''); // Clear the input after adding
    };
    return (
        <>
            <div className="container mt-4">
            <h2 className="text-center">Task Manager</h2>
            <div className="input-group mb-3">
                <input 
                    type="text" 
                    className="form-control" 
                    value={input} 
                    onChange={(e) => setInput(e.target.value)} 
                    placeholder="Enter a new task"
                />
                <div className="input-group-append">
                    <button className="btn btn-success" onClick={handleAddTask}>
                        Add Task
                    </button>
                </div>
            </div>
        </div>
        </>
    );
}
