const express = require('express');
const router = express.Router();
const Goal = require('../models/Goal');

// GET
router.get('/getGoals', async (req, res) => {
  try {
    const goals = await Goal.find();
    res.status(200).json(goals);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener las metas' });
  }
});

// POST
router.post('/addGoal', async (req, res) => {
  const { name, description, dueDate } = req.body;

  if (!name || !description || !dueDate) {
    return res.status(400).json({ error: 'Parámetros incorrectos. Se requiere name, description y dueDate.' });
  }

  try {
    const newGoal = new Goal({ name, description, dueDate });
    await newGoal.save();
    res.status(200).json(newGoal);
  } catch (error) {
    res.status(500).json({ error: 'Error al agregar la meta' });
  }
});

// DELETE
router.delete('/removeGoal/:id', async (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({ error: 'Parámetros incorrectos. Se requiere un id válido.' });
  }

  try {
    await Goal.findByIdAndDelete(id);
    res.status(200).json({ message: 'Meta eliminada correctamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar la meta' });
  }
});

module.exports = router;