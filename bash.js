// console.log(process);

// process.stdout.write('prompt > ');

// // The stdin 'data' event fires after a user types in a line
// process.stdin.on('data', function (data) {
//   var cmd = data.toString().trim(); // remove the newline
//   var date = Date(Date.now());
// //   var 

//   if(cmd === 'pwd') process.stdout.write(`${process.cwd()}`);
//   if(cmd === 'date') process.stdout.write(date);
//   process.stdout.write('\nprompt > ');
  
  //Mon Mar  5 10:58:04 EST 2018
//   process.stdout.write('You typed: ' + cmd);
//   process.stdout.write('\nprompt > ');

// });
console.log("Hello!")
process.stdout.write('\nprompt > ');
var cmd;
process.stdin.on('data', function (data) {
    cmd = data.toString().trim(); 
    console.log(cmd)
})

var commands = require('./commands');
// var userCommand =  'date' || 'pwd';
commands['pwd']();
// process.stdout.write('\nprompt > ')