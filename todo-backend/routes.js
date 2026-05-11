const express = require('express');
const router = express.Router();

let tasks = [
  { id: 1, name: 'Proyecto de Curso', description: 'Elaborar una aplicación web', dueDate: '31/05/2024' },
  { id: 2, name: 'Terminar de leer libro', description: 'Finalizar mi libro de react', dueDate: '31/05/2024' },
];

let goals = [
  { id: 1, name: 'Aprender React', description: 'Completar el curso de React', dueDate: '31/12/2024' },
  { id: 2, name: 'Leer 12 libros', description: 'Leer un libro por mes', dueDate: '31/12/2024' },
];

// GET
router.get('/getTasks', (req, res) => {
  res.status(200).json(tasks);
});

router.get('/getGoals', (req, res) => {
  res.status(200).json(goals);
});

// POST
router.post('/addTask', (req, res) => {
  const { name, description, dueDate } = req.body;

  if (!name || !description || !dueDate) {
    return res.status(400).json({ error: 'Parámetros incorrectos. Se requiere name, description y dueDate.' });
  }

  const newTask = { id: Date.now(), name, description, dueDate };
  tasks.push(newTask);
  res.status(200).json(newTask);
});

router.post('/addGoal', (req, res) => {
  const { name, description, dueDate } = req.body;

  if (!name || !description || !dueDate) {
    return res.status(400).json({ error: 'Parámetros incorrectos. Se requiere name, description y dueDate.' });
  }

  const newGoal = { id: Date.now(), name, description, dueDate };
  goals.push(newGoal);
  res.status(200).json(newGoal);
});

// DELETE
router.delete('/removeTask/:id', (req, res) => {
  const id = parseInt(req.params.id);

  if (!id) {
    return res.status(400).json({ error: 'Parámetros incorrectos. Se requiere un id válido.' });
  }

  tasks = tasks.filter(t => t.id !== id);
  res.status(200).json({ message: 'Tarea eliminada correctamente' });
});

router.delete('/removeGoal/:id', (req, res) => {
  const id = parseInt(req.params.id);

  if (!id) {
    return res.status(400).json({ error: 'Parámetros incorrectos. Se requiere un id válido.' });
  }

  goals = goals.filter(g => g.id !== id);
  res.status(200).json({ message: 'Meta eliminada correctamente' });
});

module.exports = router;