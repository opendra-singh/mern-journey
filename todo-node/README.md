This folder contains how i created a TODO CRUD on node and express</br>

How i created the todo on node</br>
    A. Installed express</br>
    B. index.js used to perform all the commands and holds all routes, it can be run as(node index.js)</br>
    C. Lets see into action</br>
        a.) To add: type - send data on "/add/tasks" in "x-www-form-urlencoded", Params are: task and done_by</br>
        a.) To update: type - send data on "/update/tasks" in "x-www-form-urlencoded", Params are: id, task and done_by </br>
        a.) To fetch all: type - send data on "/delete/tasks" in "x-www-form-urlencoded", No params are required - this route("/") loaded on page load and fetch data from data.json</br>
        a.) To delete: type - send data on "/add/tasks" in "x-www-form-urlencoded", Param is: id</br>

        **Note:-All the data are being fetched and stored from an external file(data.json) **