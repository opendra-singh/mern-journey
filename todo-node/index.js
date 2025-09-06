const express = require("express");
// const { json } = require("stream/consumers");
const app = express();
const fs = require('fs').promises;

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
    // console.log(arr, 'arr')
    // if(arr == undefined) res.send('No data yet to be sent');
    let html = '';
    arr.map((data) => {
        html += 'Task is - ';
        html += data.task;
        html += ' and done by - ';
        html += data.done_by;
        html += '<br>';
        html += '<br>';
    })
    // console.log(html);
    res.send(html)
})

app.post("/add/tasks", async function(req, res){
    let bodyParams = req.body;
    let arr = await readData();
    // console.log(arr, 'opo');
    let tasks = {
        'id' : arr == null || undefined ? 1 : arr.length+1,
        'task' : bodyParams.task,
        'done_by' : bodyParams.done_by
    }
    // console.log(tasks, 'task');
    let PushableData = [...(arr || []), tasks];
    await writeData(PushableData);
    res.send('Todo list Updated')
})

app.put("/update/tasks", async function(req, res){
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
    // console.log(arr);
    res.send('Todo entry Updated')
})

app.delete("/delete/tasks", async function(req, res){
    let bodyParams = req.body;
    let deleteId = bodyParams.id;
    let arr = await readData();
    arr = arr.filter((data) => {
        return data.id != deleteId;
    })
    await writeData(arr);
    res.send('entry deleted')
})

app.listen(3000);