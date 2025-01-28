import ShowTask from "./ShowTask";
import {useSelector} from 'react-redux';
export default function Screen()
{
    const tasklist=useSelector((state)=>state.todos);
    return(
    <>
     <ShowTask ></ShowTask>
     {tasklist.map(t=>(<p>{t}</p>))}
    </>
  );
}