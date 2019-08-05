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
        description: 'Specify ending line (optional).',
        type: Number,
    },
    {
        name: 'stdout',
        description: 'Outputs formatted code to stdout.',
        type: Boolean,
    },
    {
        name: 'overwrite',
        alias: 'w',
        description:
            'Overwrites specified section of input file with formatted code.',
        type: Boolean,
    },
    {
        name: 'version',
        alias: 'v',
        description: 'Print the version.',
        type: Boolean,
    },
    {
        name: 'help',
        alias: 'h',
        description: 'Print this usage guide.',
        type: Boolean,
    },
];
