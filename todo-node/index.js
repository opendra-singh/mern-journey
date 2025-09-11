import express from 'express';
import Router from './routes/tasks.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', Router);

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