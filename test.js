const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const question = rl.question('What do you think of Node.js? ', (answer) => {
  console.log(`Thank you for your valuable feedback: ${answer}`);
  rl.close();
  return;
});


for (let i = 0; i < 5; i++) {
  
  setTimeout(() => {
    question;
  }, 1000);
}


