import axios from "axios"

const api = import.meta.env.VITE_API_URL;

//Get all todos
const getTodos = async () => {
    const res = await axios.get(api)
    return res.data;
}

//create todo
const createTodo = async (todoData) => {
    const res = await axios.post(api,todoData)
    return res.data;
}


//update todo
const updateTodo = async (id,todoData) => {
    const res = await axios.put(api + id,todoData)
    return res.data;
}


//delete todo
const deleteTodo  = async (id) => {
    const res = await axios.delete(`${api}/${id}`)
    return res.data;
}


const todoService = {getTodos, createTodo, updateTodo, deleteTodo}
export default todoService



