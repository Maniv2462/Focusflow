import Taskform from "./components/Taskform";
import Tasklist from "./components/Tasklist";
import Progresstracker from "./components/Progresstracker";
import { useEffect, useState } from "react";
import "./Style.css";

export default function App(){
 const [tasks, setTasks] = useState([]);

  useEffect(() => {
    localStorage.setItem
    ("tasks", JSON.stringify(tasks))
  });

  const addTask = (task) => {
    setTasks([...tasks,task]);
  }

  const updateTask = (updatedTask,index) => {
    const newtask = [...tasks];
    newtask[index] = updatedTask;
    setTasks(newtask);
  }

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i != index))
  }
  
  return (
    <div>
      <h1><i>FocusFlow</i>🎯</h1>
      <p>Stay Focused, Get Things Done</p>
      <Taskform addTask = {addTask}/>
      <Tasklist tasks = {tasks} 
      updateTask = {updateTask} 
      deleteTask = {deleteTask}/>
      <Progresstracker tasks={tasks}/>
      <button>Clear all Tasks</button>
    </div>
  )
}
