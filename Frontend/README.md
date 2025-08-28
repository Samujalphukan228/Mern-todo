
# MERN To-Do App - Frontend

This is the **frontend** of the MERN To-Do App, built with **React + Vite + Tailwind CSS**.  
It connects to the backend API to manage todos.

---

## Features

- Add new tasks
- Delete tasks
- Toggle complete/incomplete
- Responsive UI
- Error handling and loading states

---

## Prerequisites

- Node.js >= 18
- npm >= 9

---

## Getting Started (Development)

1. Navigate to frontend folder:

```bash
cd frontend
npm install


Create .env file in client/:

VITE_API_URL=http://localhost:8000/api/todos


Start development server:

npm run dev


Open http://localhost:5173 in your browser.

Building for Production
npm run build


This generates a dist/ folder ready to deploy.

Deployment

Deploy on Vercel or Netlify.

Set VITE_API_URL to your deployed backend URL in production.

Project Structure
client/
├─ public/
├─ src/
│  ├─ components/     # TodoItem.jsx, etc.
│  ├─ pages/          # Home.jsx
│  ├─ services/       # todoService.js
│  ├─ App.jsx
│  └─ main.jsx
├─ .gitignore
└─ package.json