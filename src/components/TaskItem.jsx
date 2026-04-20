import './TaskItem.css';
import { Card } from 'react-bootstrap';

function TaskItem({ task, onToggle, onDelete }) {
  return (
    <Card className={`task-card mb-2 ${task.done ? 'task-done' : ''}`}>
      <Card.Body className="task-body">
        <div className="task-left">
          <input
            type="checkbox"
            checked={task.done}
            onChange={() => onToggle(task.id)}
            className="task-check"
          />
          <div>
            <p className="task-title">{task.title}</p>
            {task.goal && <span className="task-goal">{task.goal}</span>}
            {task.deadline && (
              <span className="task-deadline">📅 {task.deadline}</span>
            )}
          </div>
        </div>
        <button className="btn-delete" onClick={() => onDelete(task.id)}>🗑</button>
      </Card.Body>
    </Card>
  );
}

export default TaskItem;