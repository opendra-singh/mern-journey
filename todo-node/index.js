import {addTasksMiddleware, updateTasksMiddleware, deleteTasksMiddleware} from "./middlewares.js";
import express from 'express';
import fs from 'fs/promises';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

async function readData() {
    let sendData = [];
    let data = await fs.readFile('data.json', 'UTF-8');
    if( data != '' && data != undefined ) {
        return JSON.parse(data);
    }
}

async function writeData(content){
    await fs.writeFile('data.json', JSON.stringify(content));
}

app.get("/", async function(req, res){

    let arr = await readData();
    res.json(arr)
})

app.post("/add/tasks", addTasksMiddleware,  async function(req, res){
    let bodyParams = req.body;
    let arr = await readData();
    let tasks = {
        'id' : arr == null || undefined ? 1 : arr.length+1,
        'task' : bodyParams.task,
        'done_by' : bodyParams.done_by
    }
    let PushableData = [...(arr || []), tasks];
    await writeData(PushableData);
    res.send('Todo list Updated')
})

app.put("/update/tasks", updateTasksMiddleware, async function(req, res){
    let bodyParams = req.body;
    let compareId = bodyParams.id;
    let arr = await readData();
    arr.map((data) => {
        if( data.id == compareId ) {
            data.task = bodyParams.task,
            data.done_by = bodyParams.done_by
        }
    })
    await writeData(arr);
    res.send('Todo entry Updated')
})

app.delete("/delete/tasks", deleteTasksMiddleware, async function(req, res){
    let bodyParams = req.body;
    let deleteId = bodyParams.id;
    let arr = await readData();
    arr = arr.filter((data) => {
        return data.id != deleteId;
    })
    await writeData(arr);
    res.send('entry deleted')
})

app.use(function(req, res, next){
    const error = new Error(`Route ${req.method} ${req.originalUrl} not found`);
    error.status = 400;
    error.name = 'method_not_found';
    next(error);
})

app.use(function(err, req, res, next){
    if( err.name == "method_not_found" ) {
        res.status(404).send(`Either endpoint is not available or endpoint with ${req.method} method is not available`);
    }
    if( err.name == 'update_missing_fields' || err.name == 'delete_missing_fields' || err.name == 'put_missing_fields' ) {
        res.status(404).send(err.msg);
    }
})

app.listen(3000);