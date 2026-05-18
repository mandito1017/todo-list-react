const express = require('express');
const router = express.Router();
const Task = require('../models/Task');

// GET
router.get('/getTasks', async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener las tareas' });
  }
});

// POST
router.post('/addTask', async (req, res) => {
  const { name, description, dueDate } = req.body;

  if (!name || !description || !dueDate) {
    return res.status(400).json({ error: 'Parámetros incorrectos. Se requiere name, description y dueDate.' });
  }

  try {
    const newTask = new Task({ name, description, dueDate });
    await newTask.save();
    res.status(200).json(newTask);
  } catch (error) {
    res.status(500).json({ error: 'Error al agregar la tarea' });
  }
});

// DELETE
router.delete('/removeTask/:id', async (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({ error: 'Parámetros incorrectos. Se requiere un id válido.' });
  }

  try {
    await Task.findByIdAndDelete(id);
    res.status(200).json({ message: 'Tarea eliminada correctamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar la tarea' });
  }
});

module.exports = router;