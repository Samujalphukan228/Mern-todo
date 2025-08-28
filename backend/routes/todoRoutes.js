import express from "express";
import { getTodos, createTodo, updateTodo, deleteTodo } from "../controllers/todoController.js";

const router = express.Router();

router.get("/", getTodos);          // GET /api/todos
router.post("/", createTodo);       // POST /api/todos
router.put("/:id", updateTodo);     // PUT /api/todos/:id
router.delete("/:id", deleteTodo);  // DELETE /api/todos/:id

export default router;
