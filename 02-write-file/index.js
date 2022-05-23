const fs = require('fs');
const path = require('path');
const readline = require('readline');

const { stdin, stdout } = process;
const rl = readline.createInterface(stdin, stdout);

rl.setPrompt('Введите Ваше сообщение  \n');
rl.prompt();
const file = fs.createWriteStream(path.join(__dirname, 'textFile.txt'));
rl.on('line', (input) => {
  if (input == 'exit') process.exit();
  file.write(`${input} \n`);
});
rl.on('SIGINT', () => process.exit('Удачи!\n'));
process.on('exit', () => stdout.write('Удачи!\n'));
