import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./Config/Db.js"
import todoRoutes from "./routes/todoRoutes.js"

dotenv.config();
connectDB();

const app = express();
const port  = process.env.PORT;

//Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/', (req, res) => {
    res.send("Hello, World ")
})
app.use("/api/todos", todoRoutes);

app.listen(port, () => console.log(`Server is running on port ${port}`));
