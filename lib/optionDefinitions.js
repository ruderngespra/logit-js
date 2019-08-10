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
        name: 'lineNumbers',
        alias: 'n',
        description: 'Add line and column numbers to console.log.',
        type: Boolean,
    },
    {
        name: 'fileNames',
        alias: 'f',
        description: 'Add file names to console.log.',
        type: Boolean,
    },
    {
        name: 'limit',
        alias: 'l',
        typeLabel: '<string>',
        description: 'Limit console logs to specified var names.',
        type: String,
    },
    {
        name: 'verbose',
        alias: 'v',
        description: 'More detailed console logs.',
        type: Boolean,
    },
    {
        name: 'overwrite',
        alias: 'w',
        description:
            'Overwrites specified section of input file with formatted code instead of creating a new file.',
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

//     .sort((a, b) => {
//     if (a.name < b.name) {
//         return -1;
//     }
//     if (a.name > b.name) {
//         return 1;
//     }
//     return 0;
// });

// {
//     name: 'version',
//     alias: 'v',
//     description: 'Print the version.',
//     type: Boolean,
// },
