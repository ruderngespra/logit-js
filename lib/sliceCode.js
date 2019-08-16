// Atom and VS Code Version:

// module.exports = (string, { start, end }) => {
//     const stringAsArray = string.split('\n');
//     const beforeRelevantLines = stringAsArray.slice(0, start).join('\n');
//     const relevantLines = stringAsArray.slice(start, end + 1).join('\n');
//     const afterRelevantLines = stringAsArray.slice(end + 2).join('\n');
//     return { before: beforeRelevantLines, selection: relevantLines, after: afterRelevantLines };
// };

// Old Emacs Version:
module.exports = (string, { start, end }) => {
    const stringAsArray = string.split('\n');
    const beforeRelevantLines = stringAsArray.slice(0, start - 1).join('\n');
    const relevantLines = stringAsArray.slice(start - 1, end - 1).join('\n');
    const afterRelevantLines = stringAsArray.slice(end - 1).join('\n');
    return { before: beforeRelevantLines, selection: relevantLines, after: afterRelevantLines };
};

// New Emacs approach:
// module.exports = (string, { start, end }) => {
//     const stringAsArray = string.split('\n');
//     const beforeRelevantLines = stringAsArray.slice(0, start - 1).join('\n');
//     const relevantLines = stringAsArray.slice(start - 1, end - 1).join('\n');
//     const afterRelevantLines = stringAsArray.slice(end).join('\n');
//     return { before: beforeRelevantLines, selection: relevantLines, after: afterRelevantLines };
// };
