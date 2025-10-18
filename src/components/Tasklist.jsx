// Helper functions at the top of the file
const getPriorityColor = (priority) => {
  switch (priority.toLowerCase()) {
    case 'high':
      return 'red';
    case 'medium':
      return 'orange';
    case 'low':
      return 'green';
    default:
      return 'gray';
  }
};

const getPriorityEmoji = (priority) => {
  switch (priority.toLowerCase()) {
    case 'high':
      return '🔥';
    case 'medium':
      return '⚡';
    case 'low':
      return '🐢';
    default:
      return '';
  }
};

const getCategoryEmoji = (category) => {
  switch (category.toLowerCase()) {
    case 'personal':
      return '💙';  // Blue heart
    case 'work':
      return '💼';  // Briefcase
    case 'general':
      return '💚';  // Green heart
    default:
      return '';
  }
};

// Main Tasklist component
export default function Tasklist({ tasks, updateTask, deleteTask }) {
  const toggleComplete = (index) => {
    const updatedTask = { ...tasks[index], completed: !tasks[index].completed };
    updateTask(updatedTask, index);
  };

  return (
    <ul className="task-list" id="list-tasks">
      {tasks.map((task, index) => (
        <li
          key={index}
          className={`task-item ${task.completed ? "completed" : ""}`}
        >
          <div className="task-details">
            <span>
              {task.text}&nbsp;
              <small style={{ color: getPriorityColor(task.priority) }}>
                ({task.priority} {getPriorityEmoji(task.priority)},&nbsp;
              <span>
                {task.catagory} {getCategoryEmoji(task.catagory)}
              </span>)
            </small>

            </span>
            {task.time && <div className="task-time">⏰ {task.time}</div>}
          </div>
          <div className="task-actions">
            <button className="toggle-btn" onClick={() => toggleComplete(index)}>
              {task.completed ? "Undo" : "Complete"}
            </button>
            <button className="delete-btn" onClick={() => deleteTask(index)}>Delete</button>
          </div>
        </li>
      ))}
    </ul>
  );
}
