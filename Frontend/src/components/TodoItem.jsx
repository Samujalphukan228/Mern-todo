import { FaTrash } from "react-icons/fa";

const TodoItem = ({ todo, onToggle, onDelete }) => {
  return (
    <li
      className={`flex justify-between items-center p-2 border-b ${
        todo.completed ? "line-through text-gray-500" : ""
      }`}
    >
      <span
        onClick={() => onToggle(todo._id, todo.completed)}
        className="cursor-pointer"
      >
        {todo.title}
      </span>
      <button
        onClick={() => onDelete(todo._id)}
        className="text-red-600 hover:text-red-800"
      >
        <FaTrash />
      </button>
    </li>
  );
};

export default TodoItem;
