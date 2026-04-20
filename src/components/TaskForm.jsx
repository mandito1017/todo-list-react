import './TaskForm.css';
import { useState } from 'react';
import { Form, Button, Card, Row, Col } from 'react-bootstrap';

function TaskForm({ onAdd }) {
  const [title, setTitle] = useState('');
  const [goal, setGoal] = useState('');
  const [deadline, setDeadline] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    onAdd({ title, goal, deadline });
    setTitle('');
    setGoal('');
    setDeadline('');
  };

  return (
    <Card className="form-card mb-4">
      <Card.Body>
        <h5 className="form-title">Nueva Tarea</h5>
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col md={12} className="mb-3">
              <Form.Control
                type="text"
                placeholder="¿Qué necesitas hacer?"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="form-input"
              />
            </Col>
            <Col md={6} className="mb-3">
              <Form.Control
                type="text"
                placeholder="Meta asociada (ej. Salud, Trabajo)"
                value={goal}
                onChange={(e) => setGoal(e.target.value)}
                className="form-input"
              />
            </Col>
            <Col md={6} className="mb-3">
              <Form.Control
                type="date"
                value={deadline}
                onChange={(e) => setDeadline(e.target.value)}
                className="form-input"
              />
            </Col>
          </Row>
          <Button type="submit" className="btn-add w-100">
            + Agregar Tarea
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
}

export default TaskForm;