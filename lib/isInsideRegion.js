// This Function has do be generalized so that it can account for
// different kind of nodes.

module.exports = (path, { opts }) => {
    const { node } = path;
    // console.log('Object.keys(node): ', Object.keys(node));
    // console.log('node.loc', node.loc);
    if (
        !node.loc ||
        (opts.start && opts.start > node.loc.start.line) ||
        (opts.end && opts.end < node.loc.end.line)
    ) {
        return false;
    }
    return true;
};
