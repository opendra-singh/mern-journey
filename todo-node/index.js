const express = require("express");
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

// app.use(function(req, res, next){
//     // console.log('op');
//     next();
//     // next();
// })

app.get("/", async function(req, res){

    let arr = await readData();
    let x;
    var y = x.length
    // let html = '';
    // arr.map((data) => {
    //     html += 'Task is - ';
    //     html += data.task;
    //     html += ' and done by - ';
    //     html += data.done_by;
    //     html += '<br>';
    //     html += '<br>';
    // })
    res.json('bl bla')
})

app.post("/add/tasks", async function(req, res){
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

app.use(function(err, req, res, next){

    if( req.method == "GET" && req.route.path == "/") {
        
    }
    console.log('opp');
    console.log();
    console.log(err);
    console.log('op');
    next();
    res.send('kkkkk');
    // if(req.body)
    // err.status(404).json('something is missing')
})

app.listen(3000);