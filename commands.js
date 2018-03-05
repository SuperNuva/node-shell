module.exports = {
    pwd: function() {
        process.stdout.write(`${process.cwd()}`);
      },

    date: function() {
      var d = Date(Date.now());
        process.stdout.write(d);
      }
}

