import './ItemPage.scss';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Row, Col, Button, Modal } from 'react-bootstrap';
import TaskCard from './TaskCard';
import ItemForm from './ItemForm';
import { fetchTasks, addTask, removeTask } from '../store/tasksSlice';
import { fetchGoals, addGoal, removeGoal } from '../store/goalsSlice';

function ItemPage({ type }) {
  const dispatch = useDispatch();
  const items = useSelector((state) => state[type].items);

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (type === 'tasks') {
      dispatch(fetchTasks());
    } else {
      dispatch(fetchGoals());
    }
  }, [type, dispatch]);

  const handleAdd = () => {
    if (!name.trim()) return;
    if (type === 'tasks') {
      dispatch(addTask({ name, description, dueDate }));
    } else {
      dispatch(addGoal({ name, description, dueDate }));
    }
    setName('');
    setDescription('');
    setDueDate('');
    setShowModal(false);
  };

  const handleRemove = (id) => {
    if (type === 'tasks') {
      dispatch(removeTask(id));
    } else {
      dispatch(removeGoal(id));
    }
  };

  const buttonText = type === 'tasks' ? 'ADD TASK' : 'ADD GOAL';

  return (
    <Container fluid className="item-page">
      <Row>
        <Col lg={4} className="form-col d-none d-lg-block">
          <ItemForm
            name={name} setName={setName}
            description={description} setDescription={setDescription}
            dueDate={dueDate} setDueDate={setDueDate}
            onAdd={handleAdd}
            buttonText={buttonText}
          />
        </Col>

        <Col lg={8} className="cards-col">
          <Button
            className="btn-add-mobile d-lg-none mb-3"
            onClick={() => setShowModal(true)}
          >
            {buttonText}
          </Button>

          <div className="cards-list">
            {items && items.map(item => (
              <TaskCard key={item._id} task={item} onRemove={handleRemove} />
            ))}
          </div>
        </Col>
      </Row>

      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>{type === 'tasks' ? 'Nueva Tarea' : 'Nueva Meta'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ItemForm
            name={name} setName={setName}
            description={description} setDescription={setDescription}
            dueDate={dueDate} setDueDate={setDueDate}
            onAdd={handleAdd}
            buttonText={buttonText}
          />
        </Modal.Body>
      </Modal>
    </Container>
  );
}

export default ItemPage;