import { useState } from "react"
export default function Taskform({ addTask }) {
  const [task, setTask] = useState('');
  const [priority, setPriority] = useState('Medium');
  const [catagory, setCatagory] = useState('General');
  const [time, setTime] = useState('');  // new state for time input

  const handlesubmit = (e) => {
    e.preventDefault();
    addTask({ text: task, priority, catagory, time, completed: false });  // include time
    setTask('');
    setPriority('Medium');
    setCatagory('General');
    setTime('');
  }

  return (
    <form className="task-form" id="form-task" onSubmit={handlesubmit}>
      <div className="task-row">
        <input
          type="text"
          className="task-input"
          id="task-input"
          placeholder="Enter the task*"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          required
        />
        <button className="add-btn" type="submit">Add Task</button>
      </div>
      <div className="task-row">
        <select
          className="select-priority"
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
        <select
          className="select-category"
          value={catagory}
          onChange={(e) => setCatagory(e.target.value)}
        >
          <option value="General">General</option>
          <option value="Work">Work</option>
          <option value="Personal">Personal</option>
        </select>
        <input
          type="time"
          className="select-time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          aria-label="Set task time"
        />
      </div>
    </form>
  )
}
