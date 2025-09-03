const express = require("express");
const app = express();

app.get("/", function(req, res){
    res.send('Hello route initilized')
})

app.get("/tasks", function(req, res){
    const tasks = {
        "Node" : "Commander Cli, Chalk library, Http route etc",
        "JS" : "Async await, Map, filter, promises, clousers, prototype and etc"
    }
    res.send(tasks);
})

app.listen(3000);