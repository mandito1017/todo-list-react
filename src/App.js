import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useState } from 'react';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Estudiar React', goal: 'Aprendizaje', deadline: '2025-05-01', done: false },
    { id: 2, title: 'Crear repositorio GitHub', goal: 'Proyecto', deadline: '2025-04-30', done: false },
  ]);

  const addTask = (task) => {
    setTasks([...tasks, { ...task, id: Date.now(), done: false }]);
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, done: !t.done } : t));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  return (
    <div className="app-wrapper">
      <Header />
      <Container className="main-container">
        <TaskForm onAdd={addTask} />
        <TaskList tasks={tasks} onToggle={toggleTask} onDelete={deleteTask} />
      </Container>
    </div>
  );
}

export default App;