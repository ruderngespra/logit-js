// Ein Modul, mit dessen Hilfe der Bereich ausgewählt wird, der danach
// von logit umgeschrieben werden soll.

module.exports = function(codeString, { start, end }) {
    const startRegEx = new RegExp('\\w*//\\s' + start + '\\s*\\n');
    const endRegEx = new RegExp('\\w*//\\s' + end + '\\s*\\n');
    if (
        codeString.search(startRegEx) == -1 ||
        codeString.search(endRegEx) == -1
    ) {
        throw Error('At least one marker not found.');
    }
    return {
        scopeString: codeString.slice(
            codeString.search(startRegEx) +
                startRegEx.exec(codeString)[0].length -
                1,
            codeString.search(endRegEx) - 1
        ),
        startIndex:
            codeString.search(startRegEx) +
            startRegEx.exec(codeString)[0].length,
    };
};

// console.log(/[^.]\s*.*lg-start/.exec(codeString)[0]);
// console.log(/\w*\/\/\s*lg-start\s*\n/.exec(codeString)[0]);
