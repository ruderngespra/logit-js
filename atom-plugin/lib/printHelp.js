const commandLineUsage = require('command-line-usage');
const optionDefinitions = require('./optionDefinitions.js');

const sections = [
    {
        header: 'logit-js',
        content: 'Lightweight debugging utility',
    },
    {
        header: 'Description',
        content: 'Logit-js writes informative console logs into javascript files.',
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
