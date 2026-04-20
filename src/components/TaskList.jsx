import './TaskList.css';
import TaskItem from './TaskItem';

function TaskList({ tasks, onToggle, onDelete }) {
  const pending = tasks.filter(t => !t.done);
  const done = tasks.filter(t => t.done);

  return (
    <div className="task-list">
      <div className="list-stats mb-3">
        <span className="stat-badge total">Total: {tasks.length}</span>
        <span className="stat-badge pending">Pendientes: {pending.length}</span>
        <span className="stat-badge done-badge">Completadas: {done.length}</span>
      </div>

      {pending.length > 0 && (
        <>
          <h6 className="section-label">Pendientes</h6>
          {pending.map(t => (
            <TaskItem key={t.id} task={t} onToggle={onToggle} onDelete={onDelete} />
          ))}
        </>
      )}

      {done.length > 0 && (
        <>
          <h6 className="section-label done-label">Completadas</h6>
          {done.map(t => (
            <TaskItem key={t.id} task={t} onToggle={onToggle} onDelete={onDelete} />
          ))}
        </>
      )}

      {tasks.length === 0 && (
        <p className="empty-msg">No tienes tareas aún. ¡Agrega una arriba!</p>
      )}
    </div>
  );
}

export default TaskList;