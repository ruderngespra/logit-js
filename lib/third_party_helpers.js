// Copy pasted from
// https://github.com/kentcdodds/babel-plugin-codegen/blob/master/src/helpers.js
// See https://www.youtube.com/watch?time_continue=2708&v=VBscbcm2Mok
// for details.

function isPrimitive(val) {
    return val == null || /^[sbn]/.test(typeof val);
}

module.exports = function looksLike(a, b) {
    return (
        a &&
        b &&
        Object.keys(b).every(bKey => {
            const bVal = b[bKey];
            const aVal = a[bKey];
            if (typeof bVal === 'function') {
                return bVal(aVal);
            }
            return isPrimitive(bVal) ? bVal === aVal : looksLike(aVal, bVal);
        })
    );
};
