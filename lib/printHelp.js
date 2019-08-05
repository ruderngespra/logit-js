const commandLineUsage = require('command-line-usage');

const sections = [
    {
        header: 'logit-js',
        content: 'Lightweight debugging command line utility',
    },
    {
        header: 'Options',
        optionList: [
            {
                name: 'help',
                description: 'Print this usage guide.',
            },
        ],
    },
];

const usage = commandLineUsage(sections);

module.exports = usage;
