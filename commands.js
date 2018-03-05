
module.exports = {
    pwd: function() {
      // pwd code
      // process.stdin.on('data', function (data) {
        // var cmd = data.toString().trim(); // remove the newline
        // if(cmd === 'pwd') 
        process.stdout.write(`${process.cwd()}`);
        process.stdout.write('\nprompt > ');
        },
    // },
    date: function() {
      // var d = Date(Date.now());
      // process.stdin.on('data', function (data) {
        // var cmd = data.toString().trim();
        if(cmd === 'date') process.stdout.write(d);
        process.stdout.write('\nprompt > ');
        // })
    }
}

