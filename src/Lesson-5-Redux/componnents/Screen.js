import React, { useState } from "react";
import ShowTask from "./ShowTask";
import Task from "./Task";
import { useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Screen() {
    const tasklist = useSelector((state) => state.todos.todos);
    const recyclelist = useSelector((state) => state.recycleByn.resycleByn);
    const [showRecycleBin, setShowRecycleBin] = useState(false);

    return (
        <div className="container mt-4">
            <h1 className="text-center mb-4">ניהול משימות</h1>

            {/* כפתור להצגת הסל מיחזור */}
            <div className="text-center mb-3">
                <button 
                    className="btn btn-outline-secondary" 
                    onClick={() => setShowRecycleBin(!showRecycleBin)}
                >
                    {showRecycleBin ? "הסתר סל מיחזור" : "הצג סל מיחזור"}
                </button>
            </div>

            {/* סל מיחזור */}
            {showRecycleBin && (
                <div className="card p-3 mb-3">
                    <h4 className="text-center text-danger">סל מיחזור</h4>
                    <div className="task-list">
                        {recyclelist.length > 0 ? (
                            recyclelist.map((t, index) => (
                                <Task key={t.id || index} value={t} id={t.id || index} placMent="bin" />
                            ))
                        ) : (
                            <p className="text-center text-muted">הסל מיחזור ריק</p>
                        )}
                    </div>
                </div>
            )}

            {/* רשימת משימות */}
            <div className="card p-3">
                <h4 className="text-center text-primary">רשימת משימות</h4>
                <ShowTask />
                <div className="task-list mt-3">
                    {tasklist.length > 0 ? (
                        tasklist.map((t, index) => (
                            <Task key={t.id || index} value={t} id={t.id || index} placMent="task" />
                        ))
                    ) : (
                        <p className="text-center text-muted">אין משימות כרגע</p>
                    )}
                </div>
            </div>
        </div>
    );
}
