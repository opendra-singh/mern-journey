import { readData, writeData } from '../models/tasksModel.js';

export async function addTasks(req, res){
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
};

export async function updateTasks(req, res){
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
}

export async function deleteTasks (req, res){
    let bodyParams = req.body;
    let deleteId = bodyParams.id;
    let arr = await readData();
    arr = arr.filter((data) => {
        return data.id != deleteId;
    })
    await writeData(arr);
    res.send('entry deleted')
}

export async function getTasks(req, res){
    console.log('opop');
    let arr = await readData();
    res.json(arr)
}