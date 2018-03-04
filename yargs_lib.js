const yargs = require('yargs');

 const argv = yargs
  .options({
   a: {
     demand : true,
     alias: 'address',
     describe: 'Address to fetch weather for',
     string:  true
   }
   })
   .help()
   .alias('help', 'h')
   .argv;

var command = argv._[0];
console.log('command:' , command);
console.log('yargs',argv);