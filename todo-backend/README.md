#  Todo List - Backend

Backend desarrollado con Node.js y Express para gestionar tareas y metas personales.

##  Tecnologías utilizadas

- Node.js (LTS)
- Express
- CORS

##  Estructura del proyecto

todo-backend/
├── index.js          ← Servidor principal
├── middleware.js     ← Autenticación API Key
├── routes.js         ← Endpoints
├── package.json
└── README.md

##  Cómo ejecutar el proyecto

1. Clona el repositorio:
git clone https://github.com/mandito1017/todo-backend.git

2. Entra a la carpeta:

cd todo-backend

3. Instala las dependencias:
npm install

4. Inicia el servidor:
node index.js

5. El servidor correrá en:
http://localhost:3001

##  Autenticación

Todos los endpoints requieren el siguiente header:
Authorization: mi-api-key-secreta-2024

##  Endpoints

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| GET | /getTasks | Obtener todas las tareas |
| GET | /getGoals | Obtener todas las metas |
| POST | /addTask | Agregar una tarea |
| POST | /addGoal | Agregar una meta |
| DELETE | /removeTask/:id | Eliminar una tarea |
| DELETE | /removeGoal/:id | Eliminar una meta |

##  Ejemplos de uso

### Obtener tareas
curl -H "Authorization: mi-api-key-secreta-2024" http://localhost:3001/getTasks

### Agregar tarea
curl -X POST -H "Authorization: mi-api-key-secreta-2024" -H "Content-Type: application/json" -d "{"name":"Nueva tarea","description":"Descripción","dueDate":"31/05/2024"}" http://localhost:3001/addTask

### Eliminar tarea
curl -X DELETE -H "Authorization: mi-api-key-secreta-2024" http://localhost:3001/removeTask/1

## ⚠️ Nota

Los datos no persisten — si se detiene el servidor los datos se reinician.

