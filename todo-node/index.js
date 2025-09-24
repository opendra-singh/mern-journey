import express from 'express';
import Router from './routes/tasks.js';
import {errorFromRoute, methodNotFound} from './middlewares/errThrowing.js'
import { reqCount, rateLimiting, errReqCount } from './matric/matriculation.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(reqCount);
app.use(rateLimiting);
app.use('/', Router);

app.use(methodNotFound)
app.use(errReqCount);
app.use(errorFromRoute)
app.listen(3000);