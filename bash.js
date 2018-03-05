const commands = require('./commands');

let cmd;

process.stdout.write('\nprompt > ');

process.stdin.on('data', function (data) {
    cmd = data.toString().trim();
    commands[cmd]();
    process.stdout.write('\nprompt > ');

});
