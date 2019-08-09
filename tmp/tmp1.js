const { readFileSync } = require('fs');

console.log(process.argv[2]);

readFileSync(process.argv[2]);

// process.argv[2]
