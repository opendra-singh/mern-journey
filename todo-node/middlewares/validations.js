import { readData } from "../models/tasksModel.js";

export const addTasksMiddleware = ((req, res, next) => {

    const error = new Error('Required parameters check')
    error.name = 'update_missing_fields';
    error.status = '404';

    if( req.body && req.body.task && req.body.done_by ) {
        if( typeof(req.body.task) != 'string' || typeof(req.body.done_by) != 'string' ) {
            error.msg = 'Fields should be string only';
            next(error);
        } else {
            next();
        }
    } else {
        error.msg = 'Missing required fields';
        next(error);
    }
})

export const updateTasksMiddleware = async(req, res, next) => {

    const error = new Error('Required parameters check')
    error.name = 'put_missing_fields';
    error.status = '404';

    if( req.body && req.body.task && req.body.done_by && req.body.id ) {
        if( typeof(req.body.task) != 'string' || typeof(req.body.done_by) != 'string' ) {
            error.msg = `'task' and 'done_by' should be in string only`;
            next(error);
        } else if( isNaN(parseInt(req.body.id)) ) { //why i'm getting string here?
            error.msg = `'id' should be in integer only`;
            next(error);
        } else {
            const allData = await readData();
            const foundId = allData.some( data => {
                return data.id == req.body.id;
            })
            if( ! foundId ) {
                error.msg = 'Id does not exist to update the entry';
                next(error);
            } else {
                next();
            }
        }
    } else {
        error.msg = 'Missing required fields';
        next(error);
    }
}

export const deleteTasksMiddleware = async(req, res, next) => {

    const error = new Error('Required parameters check')
    error.name = 'delete_missing_fields';
    error.status = '404';  

    if( req.body && req.body.id  ) {
        const id = parseInt(req.body.id);
        if( isNaN(id) ) { //why i'm getting string here?
            error.msg = `'id' should be in integer only`;
            next(error);
        } else {
            const allData = await readData();
            const foundId = allData.some(data => {
                return data.id == id;
            })
            if( ! foundId ) {
                error.name = 'delete_id_not_found';
                error.msg = 'Given id does not exist';
                next(error);
            } else {
                next();
            }
        }
    } else {
        error.msg = 'Missing required fields';
        next(error);
    }
}