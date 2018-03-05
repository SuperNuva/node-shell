const commands = require('./commands');

let cmd;

process.stdout.write('\nprompt > ');

process.stdin.on('data', function (data) {
    cmd = data.toString().trim();
    let str;
    if (cmd.slice(0, 4) === 'echo') {
      str = cmd.slice(5);
      cmd = 'echo';
    }

    commands[cmd](str);

});

// echo hello world // => hello world
// 'echo' => cmd; 'hello world' => str
// 'echo hello world' => slice(0, 4) => echo
// str = slice(5);
