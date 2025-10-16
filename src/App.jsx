import Taskform from "./components/Taskform";
import Tasklist from "./components/Tasklist";
import Progresstracker from "./components/Progresstracker";
import { useEffect, useState } from "react";
function App(){
 const [tasks, setTasks] = useState([]);

  useEffect(() => {
    localStorage.setItem
    ("tasks", JSON.stringify(tasks))
  });

  const addTask = (task) => {
    setTasks([...tasks,task]);
  }
  
  return (
    <div>
      <h1><i>FocusFlow</i>🎯</h1>
      <p>Stay Focused, Get Things Done</p>
      <Taskform addTask = {addTask}/>
      <Tasklist />
      <Progresstracker />
      <button>Clear all Tasks</button>
    </div>
  )
}

export default App;