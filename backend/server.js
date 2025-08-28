import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./Config/Db.js";
import todoRoutes from "./routes/todoRoutes.js";

dotenv.config();
connectDB();

const app = express();
const port = process.env.PORT || 8000; // fallback for local dev

// Middleware
app.use(cors()); // allow all for now

app.use(express.json()); // parse JSON requests

// Routes
app.get("/", (req, res) => {
    res.send("Hello, World");
});

app.use("/api/todos", todoRoutes);

app.listen(port, () => console.log(`Server is running on port ${port}`));
