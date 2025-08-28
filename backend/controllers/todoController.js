import Todo from "../Models/todoModel.js";




// get all the lists 
const getTodos = async (req, res) => {
    const todos = await Todo.find();
    res.json(todos)
}


const createTodo = async (req, res) => {

    const { title } = req.body

    if (!title) {
       throw new Error("Please add a title")
    }

    const todo = await Todo.create({
        title: title
    })

    res.json(todo)
}

const updateTodo = async (req, res) => {

    const { id } = req.params;

    const todo = await Todo.findById(id)

    if (!todo) {
        throw new Error("Todo not found")
    }

    const updatedTodo = await Todo.findByIdAndUpdate(id, req.body, {new:true})

    res.json(updatedTodo)
}


const deleteTodo = async (req, res) => {
    
     const { id } = req.params;
     const todo = await Todo.findById(id)

     if (!todo) {
        throw new Error("Todo not found");
     }

     await todo.deleteOne();

     res.json({message:"Todo deleted", id})
}



export { getTodos, createTodo, updateTodo, deleteTodo}