const { read } = require('fs');

const readline = require('readline').createInterface((
    input: process.stdin
    output: process.stdout
));

readline.question('Please type your name here: ', name => {
    console.log('Hello,its nice to meet you $(name)');
    readline.close();
});
