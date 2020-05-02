const optionDefinitions = require('./optionDefinitions.js');
const commandLineArgs = require('command-line-args');
const options = commandLineArgs(optionDefinitions);

if (options.help) {
    const help = require('./printHelp.js');
    console.log(help);
} else if (options.version) {
    // Show version number.
} else {
    module.exports = options;
}
