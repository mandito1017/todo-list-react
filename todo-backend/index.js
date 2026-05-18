const express = require('express');
const cors = require('cors');
const authMiddleware = require('./middleware');
const tasksRouter = require('./routes/tasks');
const goalsRouter = require('./routes/goals');
const connectDB = require('./db');

const app = express();
const PORT = 3001;

// Conectar a MongoDB
connectDB();

app.use(cors());
app.use(express.json());
app.use(authMiddleware);
app.use(tasksRouter);
app.use(goalsRouter);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});