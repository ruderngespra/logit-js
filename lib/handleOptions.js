// Definitions
const optionDefinitions = [
    { name: 'help', alias: 'h', type: Boolean },
    // { name: 'verbose', alias: 'v', type: Boolean },
    // { name: 'src', type: String, multiple: true, defaultOption: true },
    // { name: 'timeout', alias: 't', type: Number },
];

const commandLineArgs = require('command-line-args');
const options = commandLineArgs(optionDefinitions);

if (options.help) {
    const help = require('./printHelp.js');
    console.log(help);
}

module.exports = options;
