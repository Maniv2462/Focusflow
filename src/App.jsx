import Taskform from "./components/Taskform";
import Tasklist from "./components/Tasklist";
import Progresstracker from "./components/Progresstracker";
function App(){
  return (
    <div>
       <h1><i>FocusFlow</i>🎯</h1>
      <p>Stay Focused, Get Things Done</p>
      <Taskform />
      <Tasklist />
      <Progresstracker />
      <button>Clear all Tasks</button>
    </div>
  )
}

export default App;