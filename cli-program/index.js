const {Command} = require('commander');
const fs = require('fs');
const program = new Command();


program
  .name('todo cli')
  .description('CLI to perform CURD operation as a TODO')
  .version('1.0.0');

  let data = {};
  fs.readFile('data.json', 'utf-8', function(err, content) {
    console.log("data");
    
    console.log(content);
    if( err ) {
        console.log("data not found");
        
    }
    data = JSON.parse(data);
  })
  program.command('add_person')
    .description('Add provided text to todo.json')
    .argument('<string>', 'person name')
    .argument('<number>', 'person age')
    .option('-n', '--name <string>', 'Person name')
    .option('-a', '--age <number>', 'Person age')
    .action((name, age) => {
        let object = {
            'name' : name,
            'age' : age
        }
      data['person'] = object;
      let newData = JSON.stringify(data);
      fs.writeFile('data.json', newData, function(err){
        if(!err){
            console.log("Person is added")
        }
      })
    });

program.parse();