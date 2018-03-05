const fs = require('fs');

module.exports = {
  date: function() {
    var d = Date(Date.now());
      process.stdout.write(d);
      process.stdout.write('\nprompt > ');
  },

  echo: function() {
    let args = Array.from(arguments);

    process.stdout.write(args[0]);
    process.stdout.write('\nprompt > ');
  },

  ls: function() {
    fs.readdir('.', function(err, files) {
      if (err) throw err;
      files.forEach(function(file) {
        process.stdout.write(file.toString() + "\n");
      })
      process.stdout.write("prompt > ");
    });
  },

  pwd: function() {
      process.stdout.write(`${process.cwd()}`);
      process.stdout.write('\nprompt > ');
    },

};
