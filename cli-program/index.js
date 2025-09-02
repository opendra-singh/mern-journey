const {Command} = require('commander');
const {readFile} = require('fs/promises');
const fs = require('fs');
const program = new Command();

async function fileReadOp(){
    let data = []
    let content = await readFile('data.json', 'UTF-8');
    if( content != '' && content != undefined ) {
        return JSON.parse(content);
    } else {
        return data;
    }
}

program
  .name('todo cli')
  .description('CLI to perform CURD operation as a TODO')
  .version('1.0.0');

  program.command('add')
    .description('Add person to todo.json')
    .argument('<string>', 'person name')
    .argument('<number>', 'person age')
    .option('-n', '--name <string>', 'Person name')
    .option('-a', '--age <number>', 'Person age')
    .action(async (name, age) => {
        const p_data = await fileReadOp()
        const objectData = {
            'id' : p_data.length + 1,
            'name' : name,
            'age' : age
        }
        p_data.push(objectData);
        let newData = JSON.stringify(p_data);
        fs.writeFile('data.json', newData, function(err){
        if(!err){
            console.log("Person is added")
        }
      })
    });


    program.command('read')
    .description('read all persons from todo.json')
    .action(async () => {
        const fileData = await fileReadOp();
        fileData.map((data) => {
            console.log('name-> ' + data.name + ' and age is-> ' + data.age);
            // console.log(data);
        })
    })


    program.command('update <id> <name>') //we can pass mumber here, these are just names, anything can be passes and retrieve in the same order
    .description('update person with the given id')
    .argument('<number>', 'new person age')
    .option('-a', '--age <number>', 'New person age')
    .action(async (id, name, age) => {
        const fileData = await fileReadOp();
        let count = 0;
        fileData.map((data) => {
            if(data.id == id) {
                data.name = name;
                data.age = age;

                const newFileData = JSON.stringify(fileData)
                fs.writeFile('data.json', newFileData, function(err){
                if(!err){
                    console.log('entry updated');
                }
            })
            } else {
                count++;
            }
        })
        if( count == fileData.length ) {
            console.log('No entry found with the given id');
        }
    })

    program.command('delete <id>')
    .description('delete data with given id')
    .action(async (id) => {
        const fileData = await fileReadOp();
        const newFileData = fileData.filter((data) => {
            return data.id != id;
        })
        const newFileDataJson = JSON.stringify(newFileData);
        fs.writeFile('data.json', newFileDataJson, function(err){
        if(!err){
            console.log('entry updated');
        }})
    })

program.parse();