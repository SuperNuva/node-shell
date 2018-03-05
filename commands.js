const fs = require('fs');

module.exports = {
  date: function(param) {
    var d = Date(Date.now());
      process.stdout.write(d);
      process.stdout.write('\nprompt > ');
  },

  echo: function(str) {
    process.stdout.write(str);
    process.stdout.write('\nprompt > ');
  },

  ls: function(param) {
    fs.readdir('.', function(err, files) {
      if (err) throw err;
      files.forEach(function(file) {
        process.stdout.write(file.toString() + "\n");
      })
      process.stdout.write("prompt > ");
    });
  },

  pwd: function(param) {
      process.stdout.write(`${process.cwd()}`);
      process.stdout.write('\nprompt > ');
    },

};
