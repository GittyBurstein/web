import ShowTask from "./ShowTask";
import Task from "./Task";
import {useSelector} from 'react-redux';
export default function Screen()
{
    const tasklist=useSelector((state)=>state.todos.todos);
    const recyclelist=useSelector((state) => state.recycleByn.resycleByn);
    return(
      <div className="container mt-4"> 
      <div className="task-list mt-3">
          {recyclelist.map((t, index) => (
              <Task key={index} value={t} id={index} placeMent="bin" /> 
          ))}
      </div>
      <ShowTask />
      <div className="task-list mt-3">
          {tasklist.map((t, index) => (
              <Task key={index} value={t} id={index} placeMent="task"/> 
          ))}
      </div>
     

      <div>

      </div>
  </div>
  );
}