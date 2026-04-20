import './TasksPage.css';
import { useState } from 'react';
import { Container, Row, Col, Form, Button, Modal } from 'react-bootstrap';
import TaskCard from './TaskCard';

function TasksPage() {
  const [tasks, setTasks] = useState([
    { id: 1, name: 'Proyecto de Curso de desarrollo web', description: 'Elaborar una aplicación web responsive', dueDate: '31/05/2024' },
    { id: 2, name: 'Terminar de leer libro', description: 'Finalizar mi libro de react', dueDate: '31/05/2024' },
    { id: 3, name: 'Suba Actividad 1', description: 'Responder el test en el GES', dueDate: '31/05/2024' },
  ]);

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleAdd = () => {
    if (!name.trim()) return;
    setTasks([...tasks, { id: Date.now(), name, description, dueDate }]);
    setName('');
    setDescription('');
    setDueDate('');
    setShowModal(false);
  };

  const handleRemove = (id) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  return (
    <Container fluid className="tasks-page">
      <Row>
        <Col lg={4} className="form-col d-none d-lg-block">
          <div className="task-form">
            <Form.Group className="mb-3">
              <Form.Label className="form-label-custom">Name</Form.Label>
              <Form.Control
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="form-input-custom"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="form-label-custom">Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="form-input-custom"
              />
            </Form.Group>
            <Form.Group className="mb-4">
              <Form.Label className="form-label-custom">Due Date</Form.Label>
              <Form.Control
                type="date"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
                className="form-input-custom"
              />
            </Form.Group>
            <Button className="btn-add-task w-100" onClick={handleAdd}>
              ADD TASK
            </Button>
          </div>
        </Col>

        <Col lg={8} className="cards-col">
          <Button
            className="btn-add-mobile d-lg-none mb-3"
            onClick={() => setShowModal(true)}
          >
            ADD TASK
          </Button>

          <div className="cards-list">
            {tasks.map(task => (
              <TaskCard key={task.id} task={task} onRemove={handleRemove} />
            ))}
          </div>
        </Col>
      </Row>

      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Nueva Tarea</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3">
            <Form.Label className="form-label-custom">Name</Form.Label>
            <Form.Control
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="form-input-custom"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label className="form-label-custom">Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="form-input-custom"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label className="form-label-custom">Due Date</Form.Label>
            <Form.Control
              type="date"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
              className="form-input-custom"
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button className="btn-add-task w-100" onClick={handleAdd}>
            ADD TASK
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default TasksPage;