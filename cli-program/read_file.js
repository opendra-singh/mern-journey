const {Command} = require('commander');
const fs = require('fs');
const program = new Command();

program
  .name('read file')
  .description('CLI to read files and process the output')
  .version('1.0.0');

program.command('countNumbers')
  .description('count characters from file')
  .argument('<path>', 'filename')
  .option('-f', '--filename', 'a.txt')
  .action((fileName) => {
    const data = fs.readFile(fileName, 'UTF-8', function(err, data){
        let count = data.split(' ');
        console.log(count.length);
    })    
  });

  program.command('upperCase')
  .description('Change all text to uppercase from the given file')
  .argument('<path>', 'filename')
  .option('-f', '--filename', 'a.txt')
  .action((fileName) => {
    const data = fs.readFile(fileName, 'UTF-8', function(err, data){
        let upperCase = data.toUpperCase();
        console.log(upperCase);
    })    
  });

program.parse();