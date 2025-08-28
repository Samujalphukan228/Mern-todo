# MERN To-Do App - Backend

This is the **backend** of the MERN To-Do App, built with **Express.js + MongoDB Atlas**.  
It provides a REST API for managing todos.

---

## Features

- REST API for todos:
  - GET `/api/todos` → Get all todos
  - POST `/api/todos` → Create a todo
  - PUT `/api/todos/:id` → Update a todo
  - DELETE `/api/todos/:id` → Delete a todo
- Error handling and validation
- Ready for deployment

---

## Prerequisites

- Node.js >= 18
- npm >= 9
- MongoDB Atlas account

---

## Getting Started (Development)

1. Navigate to backend folder:

```bash
cd server
npm install
Create .env file in server/:

env
Copy code
PORT=8000
MONGO_URI=your_mongodb_connection_string
Start development server:

bash
Copy code
npm run dev   # If using nodemon
# or
npm start     # For normal node server
Backend runs on http://localhost:8000

API Endpoints
sql
Copy code
GET /api/todos          → Get all todos
POST /api/todos         → Create a todo
PUT /api/todos/:id      → Update a todo
DELETE /api/todos/:id   → Delete a todo
Deployment
Deploy on Vercel, Render, Railway, or Heroku.

Make sure to set environment variables in production:

cpp
Copy code
MONGO_URI
PORT (optional, default 8000)
Project Structure
bash
Copy code
server/
├─ controllers/      # todoController.js
├─ models/           # todoModel.js
├─ routes/           # todoRoutes.js
├─ server.js
├─ .env
├─ .gitignore
└─ package.json