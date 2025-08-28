import { useEffect, useState } from "react";
import todoService from "../services/todoService";
import TodoItem from "../components/TodoItem";

const Home = () => {
  // State
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch todos on mount
  useEffect(() => {
    const fetchTodos = async () => {
      try {
        setLoading(true);
        const data = await todoService.getTodos();
        // Ensure data is always an array
        setTodos(Array.isArray(data) ? data : []);
      } catch (err) {
        console.error(err);
        setError("Failed to fetch todos.");
      } finally {
        setLoading(false);
      }
    };
    fetchTodos();
  }, []);

  // Add todo
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    try {
      const newTodo = await todoService.createTodo({ title });
      setTodos([...todos, newTodo]);
      setTitle("");
    } catch (err) {
      console.error(err);
      setError("Failed to add todo.");
    }
  };

  // Toggle complete
  const handleToggle = async (id, completed) => {
    try {
      const updatedTodo = await todoService.updateTodo(id, {
        completed: !completed,
      });
      setTodos(todos.map((t) => (t._id === id ? updatedTodo : t)));
    } catch (err) {
      console.error(err);
      setError("Failed to update todo.");
    }
  };

  // Delete
  const handleDelete = async (id) => {
    try {
      await todoService.deleteTodo(id);
      setTodos(todos.filter((t) => t._id !== id));
    } catch (err) {
      console.error(err);
      setError("Failed to delete todo.");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-12 p-6 bg-white shadow-xl rounded-3xl">
      <h1 className="text-3xl font-extrabold mb-6 text-center text-gray-800">
        MERN To-Do App
      </h1>

      {/* Error message */}
      {error && (
        <div className="mb-4 p-2 bg-red-100 text-red-700 rounded">{error}</div>
      )}

      {/* Add new todo */}
      <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="Add new task..."
          className="flex-1 border border-gray-300 p-3 rounded-l-2xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button className="bg-blue-600 text-white px-6 rounded-r-2xl hover:bg-blue-700 transition">
          Add
        </button>
      </form>

      {/* Loading */}
      {loading ? (
        <p className="text-center text-gray-500">Loading todos...</p>
      ) : todos.length === 0 ? (
        <p className="text-center text-gray-500">No todos found.</p>
      ) : (
        <ul>
          {todos.map((todo) => (
            <TodoItem
              key={todo._id}
              todo={todo}
              onToggle={handleToggle}
              onDelete={handleDelete}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default Home;
