const commandLineUsage = require('command-line-usage');
const optionDefinitions = require('./optionDefinitions.js');

console.log(optionDefinitions);

const sections = [
    {
        header: 'logit-js',
        content: 'Lightweight debugging command line utility',
    },
    {
        header: 'Usage',
        content: ['$ logit [{bold OPTION}] ... [{bold FILE}] ...'],
    },
    {
        header: 'Options',
        optionList: optionDefinitions,
    },
];

const usage = commandLineUsage(sections);

module.exports = usage;
