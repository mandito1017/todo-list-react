import './TaskCard.scss';
import { Card, Badge, Button } from 'react-bootstrap';

function TaskCard({ task, onRemove }) {
  return (
    <Card className="task-card">
      <Card.Body>
        <Card.Title className="card-name">{task.name}</Card.Title>
        <Badge bg="info" className="mb-2">Descripción</Badge>
        <Card.Text className="card-description">{task.description}</Card.Text>
        <Badge bg="warning" text="dark" className="mb-2">Fecha de Vencimiento</Badge>
        <Card.Text className="card-due-date">{task.dueDate}</Card.Text>
        <Button className="btn-remove" onClick={() => onRemove(task._id)}>
          Eliminar
        </Button>
      </Card.Body>
    </Card>
  );
}

export default TaskCard;