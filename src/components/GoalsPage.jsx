import './GoalsPage.css';
import { useState } from 'react';
import { Container, Row, Col, Form, Button, Modal } from 'react-bootstrap';
import TaskCard from './TaskCard';

function GoalsPage() {
  const [goals, setGoals] = useState([
    { id: 1, name: 'Aprender React', description: 'Completar el curso de React', dueDate: '31/05/2024' },
    { id: 2, name: 'Leer 12 libros', description: 'Leer un libro por mes durante el año', dueDate: '31/12/2024' },
  ]);

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleAdd = () => {
    if (!name.trim()) return;
    setGoals([...goals, { id: Date.now(), name, description, dueDate }]);
    setName('');
    setDescription('');
    setDueDate('');
    setShowModal(false);
  };

  const handleRemove = (id) => {
    setGoals(goals.filter(g => g.id !== id));
  };

  return (
    <Container fluid className="goals-page">
      <Row>
        <Col lg={4} className="form-col d-none d-lg-block">
          <div className="goal-form">
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
            <Button className="btn-add-goal w-100" onClick={handleAdd}>
              ADD GOAL
            </Button>
          </div>
        </Col>

        <Col lg={8} className="cards-col">
          <Button
            className="btn-add-mobile-goal d-lg-none mb-3"
            onClick={() => setShowModal(true)}
          >
            ADD GOAL
          </Button>

          <div className="cards-list">
            {goals.map(goal => (
              <TaskCard key={goal.id} task={goal} onRemove={handleRemove} />
            ))}
          </div>
        </Col>
      </Row>

      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Nueva Meta</Modal.Title>
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
          <Button className="btn-add-goal w-100" onClick={handleAdd}>
            ADD GOAL
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default GoalsPage;