import ShowTask from "./ShowTask";
import Task from "./Task";
import {useSelector} from 'react-redux';
export default function Screen()
{
    const tasklist=useSelector((state)=>state.todos);
    const counter = useSelector((state) => state.counter);
    return(
      <div className="container mt-4">
      <ShowTask />
      <h2 className="text-center mt-3">Total Tasks: {counter}</h2> {/* Display the counter here */}
      <div className="task-list mt-3">
          {tasklist.map((t, index) => (
              <Task key={index} value={t} id={index} /> 
          ))}
      </div>
  </div>
  );
}