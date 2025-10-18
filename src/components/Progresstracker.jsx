export default function Progresstracker({ tasks }) {
  const completedTasks = tasks.filter(task => task.completed).length;
  const totalTasks = tasks.length;
  const percenteage = totalTasks === 0 ? 0 : (completedTasks / totalTasks) * 100;

  return (
    <div className="progress-tracker" id="tracker-progress">
      <p className="progress-text">{completedTasks} of {totalTasks} tasks completed</p>
      <div className="progress-bar">
        <div
          className="progress"
          style={{ width: `${percenteage}%` }}
          id="progress-indicator"
        ></div>
      </div>
    </div>
  )
}
