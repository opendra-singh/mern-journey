import express from 'express';
import { addTasksMiddleware, deleteTasksMiddleware, updateTasksMiddleware } from "../middlewares/validations.js"
import { addTasks, deleteTasks, getTasks, updateTasks, allRequests } from '../controllers/tasksController.js';

const Router = express.Router();

    Router.post('/add/tasks', addTasksMiddleware, addTasks)
    Router.put("/update/tasks", updateTasksMiddleware, updateTasks)
    Router.delete("/delete/tasks", deleteTasksMiddleware, deleteTasks)
    Router.get("/", getTasks);
    Router.get("/requests", allRequests)

export default Router;