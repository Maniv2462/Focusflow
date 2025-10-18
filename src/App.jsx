import Taskform from "./components/Taskform";
import Tasklist from "./components/Tasklist";
import Progresstracker from "./components/Progresstracker";
import { useEffect, useState } from "react";
import "./Style.css";

export default function App() {
  const [tasks, setTasks] = useState(() => {
    // Load tasks from localStorage initially if available
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  useEffect(() => {
    // Save tasks to localStorage whenever tasks state changes
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const updateTask = (updatedTask, index) => {
    const newTasks = [...tasks];
    newTasks[index] = updatedTask;
    setTasks(newTasks);
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const clearTasks = () => {
    setTasks([]);
  };

  return (
    <div className="app-background">
      <div className="app-container" id="focusflow-root">
        <h1 className="app-title"><i>FocusFlow</i>🎯</h1>
        <h6 className="app-desc">Stay Focused, Get Things Done</h6>
        <Taskform addTask={addTask} />
        <Tasklist tasks={tasks} updateTask={updateTask} deleteTask={deleteTask} />
        <Progresstracker tasks={tasks} />
        <button className="clear-btn" onClick={clearTasks}>Clear all Tasks</button>
      </div>
    </div>
  );
}
