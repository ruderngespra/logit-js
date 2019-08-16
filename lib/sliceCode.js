module.exports = (string, { start, end }) => {
    const stringAsArray = string.split('\n');
    const beforeRelevantLines = stringAsArray.slice(0, start).join('\n');
    const relevantLines = stringAsArray.slice(start, end + 1).join('\n');
    const afterRelevantLines = stringAsArray.slice(end + 2).join('\n');
    return { before: beforeRelevantLines, selection: relevantLines, after: afterRelevantLines };
};
