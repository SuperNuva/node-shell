const commands = require('./commands');

let cmd;

process.stdout.write('\nprompt > ');

process.stdin.on('data', function (data) {
    cmd = data.toString().trim();
    let filename;
    if (cmd.slice(0, cmd.indexOf(' ')) === 'echo') {
      filename = cmd.slice(cmd.indexOf(' ') + 1);
      cmd = 'echo';
    }

    commands[cmd](filename);

});

// echo hello world // => hello world
// 'echo' => cmd; 'hello world' => str
// 'echo hello world' => slice(0, 4) => echo
// str = slice(5);

