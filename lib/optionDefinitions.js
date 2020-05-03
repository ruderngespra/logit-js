module.exports = [
    {
        name: 'src',
        type: String,
        description: 'The input file to process (default).',
        typeLabel: '<file>',
        defaultOption: true,
    },
    {
        name: 'start',
        alias: 's',
        typeLabel: '<number>',
        description: 'Specify starting line (optional).',
        type: Number,
    },
    {
        name: 'end',
        alias: 'e',
        typeLabel: '<number>',
        description: 'Specify ending line.',
        type: Number,
    },
    {
        name: 'verbose',
        alias: 'v',
        description: 'More detailed console logs (e.g. with var type info and function names).',
        type: Boolean,
    },
    {
        name: 'remove',
        alias: 'd',
        description: 'Remove all console logs',
        type: Boolean,
    },
    {
        name: 'stdout',
        description: 'Output to stdout instead of file.',
        type: Boolean,
    },
    {
        name: 'help',
        alias: 'h',
        description: 'Print this usage guide.',
        type: Boolean,
    },
];
