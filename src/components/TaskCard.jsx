import './TaskCard.css';

function TaskCard({ task, onRemove }) {
  return (
    <div className="task-card">
      <p className="card-name"><strong>Name</strong> {task.name}</p>
      <p className="card-description"><strong>Description</strong> {task.description}</p>
      <p className="card-due-date"><strong>Due Date:</strong> {task.dueDate}</p>
      <button className="btn-remove" onClick={() => onRemove(task.id)}>
        Remover
      </button>
    </div>
  );
}

export default TaskCard;