// Ein Modul, mit dessen Hilfe der Bereich ausgewählt wird, der danach
// von logit umgeschrieben werden soll.

module.exports = function(codeString, { start, end }) {
    // Todo: Hier muss noch eine regex aus den values gemacht werden,
    // die die ganze Zeile miteinschließt!

    // Also, start und ziel sollten nur die marker sein, der rest muss
    // gecheckt werden.

    // const startRegEx = new RegExp('\/w*//\/s/*' + start + '/\s*/\n');
    const startRegEx = new RegExp('\\w*//\\s' + start + '\\s*\\n');
    console.log({ startRegEx });
    // console.log(`/\w*\/\/\s*lg-start\s*\n/`);
    console.log(startRegEx.exec(codeString)[0])
    // console.log(/\w*\/\/\s*lg-start\s*\n/.exec(codeString)[0]);
    // console.log(startRegEx.test(codeString));
    // console.log(/\w*\/\/\s*lg-start\s*\n/.exec(codeString)[0]);
    // console.log(codeString.match(/lg-start/));
    // console.log(/^\s*.*lg-start/.exec(codeString));
    if (codeString.indexOf(start) == -1 || codeString.indexOf(end) == -1) {
        throw Error('At least one marker not found.');
    }
    return codeString.slice(codeString.indexOf(start), codeString.indexOf(end));
};

// console.log(/[^.]\s*.*lg-start/.exec(codeString)[0]);
// console.log(/\w*\/\/\s*lg-start\s*\n/.exec(codeString)[0]);
