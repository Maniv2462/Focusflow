import { useState } from "react"
export default function Taskform({addTask}){
     const[task,setTask] = useState();
     const[priority,setPriority]=useState('Medium');
     const[catagory,setCatagory]=useState('General');
     
     const handlesubmit = (e) => {
        e.preventDefault();//refresh
        addTask({text: task, priority, catagory, completed:false});
       //reset
        setTask('');
        setPriority('Medium');
        setCatagory('General');
     }
    return(
        <form onSubmit={handlesubmit} className="task-form">
            <div id="inp">
                <input type="text" placeholder="Enter the task*"
                value={task}
                onChange={(e)=>setTask(e.target.value)} required/>
                <button type="submit">Add Task</button>
                
            </div>
            <div id="btns">
                <select value={priority} onChange={(e)=>setPriority(e.target.value)}>
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                </select>

                <select value={catagory} onChange={(e)=>setCatagory(e.target.value)}>
                    <option value="General">General</option>
                    <option value="Work">Work</option>
                    <option value="Personal">Personal</option>
                </select>
            </div>
        </form>
    )
}